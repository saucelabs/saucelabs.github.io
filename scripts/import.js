const fs = require('fs')
const path = require('path')

const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()

const VALID_FILE_EXTENSIONS = ['.yml', '.md']
const INVALID_DIRECTORIES = ['.github']
const INVALID_FILES = ['README.md']
const DATA_DIR = 'opensource.saucelabs.com'

if (!process.env.GITHUB_AUTH) {
    throw new Error('Please export a "GITHUB_AUTH" access token to generate the changelog.')
}

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
        if (
            !VALID_FILE_EXTENSIONS.includes(path.extname(file.path)) ||
            INVALID_DIRECTORIES.includes(file.path.split('/')[0]) ||
            INVALID_FILES.includes(file.path.split('/').pop())
        ) {
            continue
        }

        const content = await octokit.repos.getContents({
            owner: 'saucelabs',
            repo: 'opensource',
            path: file.path,
        })

        const targetPath = file.path.includes(DATA_DIR)
            ? file.path.replace(DATA_DIR, 'data')
            : `content/${file.path.split('/')[0]}/_index.md`

        console.log('copy', file.path, 'to', targetPath)
        fs.mkdirSync(path.dirname(targetPath), { recursive: true })
        fs.writeFileSync(targetPath, new Buffer(content.data.content, 'base64'))
    }
})().then(console.log, console.error)
