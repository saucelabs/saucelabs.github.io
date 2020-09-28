const LOADER_CLASSNAME = 'animated-loader'
const PARTICIPATING_GH_ORGS = ['selenium', 'appium', 'webdriverio', 'saucelabs']
const PUBLIC_READ_ONLY_TOKEN = 'a007c6a0a64d3b0e71abd59d8c75aa5000022d19'

const openIssues = []
const openPrs = []
let closedPrs = 0
const closedIssues = []
let contributors = []
const participatingRepos = []

;(function hacktoberfestStats() {
    const clientWithAuth = new window.Octokit.Octokit({ auth: PUBLIC_READ_ONLY_TOKEN })
    const orgsAndRepos = PARTICIPATING_GH_ORGS.map((orgName) => clientWithAuth.paginate('GET /orgs/:org/repos', {
        org: orgName,
        type: 'sources',
    }))

    const totalRepos = document.getElementById('total-repos')
    const totalOpenIssues = document.getElementById('total-open-issues')
    const totalContributors = document.getElementById('total-contributors')
    const totalOpenPullRequests = document.getElementById('total-open-pull-requests')
    const totalClosedIssues = document.getElementById('total-closed-issues')
    const totalClosedPullRequests = document.getElementById('total-closed-pull-requests')
    const contributorsList = document.getElementById('hacktoberfest-contributors')

    function formatContributor(contributor) {
        const html = `<a href="${contributor.html_url}"><img class="thumbnail" src="${contributor.avatar_url}" alt="${contributor.login}"/></a>`
        return html
    }

    function formatIssue(issue) {
        const orgAndRepo = issue.repository_url.replace('https://api.github.com/repos/', '')
        const html = `<li><a href="${issue.html_url}">${orgAndRepo}: ${issue.title}</a></li>`
        return html
    }

    function formatRepo(repoUrl) {
        const orgAndRepo = repoUrl.replace('https://api.github.com/repos/', '')
        const html = `<li><a href="https://github.com/${orgAndRepo}">${orgAndRepo}</a></li>`
        return html
    }

    function build(org) {
        return org.then((orgRepos) => orgRepos.map((repo) => clientWithAuth.paginate('GET /repos/:owner/:repo/issues', {
            owner: repo.owner.login,
            repo: repo.name,
            labels: 'hacktoberfest',
            state: 'all',
        }))).then((issuesAndPullRequests) => Promise.all(issuesAndPullRequests).then((values) => {
            values.forEach((v) => {
                if (v.length === 0) {
                    return
                }

                v.forEach((issue) => {
                    if (issue.pull_request && !issue.closed_at && issue.created_at >= '2020-10-01') {
                        openPrs.push(issue)
                        contributors.push(formatContributor(issue.user))
                    } else if (issue.pull_request && issue.closed_at >= '2020-10-01' && issue.closed_at <= '2020-10-31') {
                        closedPrs += 1
                        contributors.push(formatContributor(issue.user))
                    } else if (issue.closed_at && issue.closed_at >= '2020-10-01' && issue.closed_at <= '2020-10-31') {
                        closedIssues.push(issue)
                    } else if (!issue.pull_request && !issue.closed_at) {
                        openIssues.push(issue)
                        document.getElementById('hacktoberfest-issues').innerHTML += formatIssue(issue)
                    }
                })
                participatingRepos.push(v[0].repository_url)
                document.getElementById('hacktoberfest-repos').innerHTML += formatRepo(v[0].repository_url)
            })

            contributors = [...new Set(contributors)]
            totalRepos.innerHTML = participatingRepos.length
            totalOpenIssues.innerHTML = openIssues.length
            totalContributors.innerHTML = contributors.length
            totalOpenPullRequests.innerHTML = openPrs.length
            totalClosedIssues.innerHTML = closedIssues.length
            totalClosedPullRequests.innerHTML = closedPrs

            if (contributors.length) {
                contributorsList.innerHTML = ''
            }

            contributors.map((contributor) => {
                contributorsList.innerHTML += contributor
                return contributor
            })
        }))
    }

    const loadingPromises = Object.keys(orgsAndRepos).map((org) => build(orgsAndRepos[org]))
    Promise.all(loadingPromises).then(function () {
        totalRepos.classList.remove(LOADER_CLASSNAME)
        totalOpenIssues.classList.remove(LOADER_CLASSNAME)
        totalContributors.classList.remove(LOADER_CLASSNAME)
        totalOpenPullRequests.classList.remove(LOADER_CLASSNAME)
        totalClosedIssues.classList.remove(LOADER_CLASSNAME)
        totalClosedPullRequests.classList.remove(LOADER_CLASSNAME)
    })
}())

/**
 * helper utility to toggle sections (used in onclick handler in the template)
 * @param {string} contentName  name of the toggle
 */
// eslint-disable-next-line no-unused-vars
function toggleContent(contentName) {
    document.getElementById(contentName).toggleAttribute('hidden')
    if (document.getElementById(`${contentName}-toggle`).innerHTML === 'show') {
        document.getElementById(`${contentName}-toggle`).innerHTML = 'hide'
    } else {
        document.getElementById(`${contentName}-toggle`).innerHTML = 'show'
    }
}
