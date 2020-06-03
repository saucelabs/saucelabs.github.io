const fs = require('fs')
const path = require('path')

const { Octokit } = require('@octokit/rest')

const VALID_FILE_EXTENSIONS = ['.yml', '.md']
const INVALID_DIRECTORIES = ['.github']
const INVALID_FILES = ['README.md']
const DATA_DIR = 'opensource.saucelabs.com'

if (!process.env.GITHUB_TOKEN) {
    throw new Error('Please export a "GITHUB_TOKEN" access token to generate the changelog.')
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const owner = 'saucelabs'
const repo = 'opensource'

;(async () => {
    /**
     * get last commit
     */
    const ref = await octokit.git.getRef({
        owner,
        repo,
        ref: 'heads/master',
    })

    /**
     * get file tree
     */
    const tree = await octokit.git.getTree({
        owner,
        repo,
        tree_sha: ref.data.object.sha,
        recursive: true
    });

    /**
     * copy over files
     */
    for (const file of tree.data.tree) {
        /**
         * ignore file if
         */
        if (
            /**
             * it is not a markdown or yaml file
             */
            !VALID_FILE_EXTENSIONS.includes(path.extname(file.path)) ||
            /**
             * it is in a configuration directory
             */
            INVALID_DIRECTORIES.includes(file.path.split('/')[0]) ||
            /**
             * a file we ignore, e.g. README.md
             */
            INVALID_FILES.includes(file.path.split('/').pop())
        ) {
            continue
        }

        /**
         * get file content
         */
        const content = await octokit.repos.getContents({
            owner: 'saucelabs',
            repo: 'opensource',
            path: file.path,
        })

        /**
         * file path is either:
         * - a data file from the data dir or
         * - some page content which we rename to `/content/<filename>/_index.md`
         */
        const targetPath = file.path.includes(DATA_DIR)
            ? file.path.replace(DATA_DIR, 'data')
            : `content/${file.path.split('/')[0]}/_index.md`

        console.log('copy', file.path, 'to', targetPath)
        fs.mkdirSync(path.dirname(targetPath), { recursive: true })
        fs.writeFileSync(targetPath, new Buffer(content.data.content, 'base64'))

        return '\nSuccessfully copied content over 👍'
    }
})().then(console.log, console.error)
