---
title: "Releasing a new Open Source project"
description: "This is meta description."
draft: false
---

Here you can see the steps that describe how Saucers can release a new open source project. This is a simple process, and if you need help going through it the Open Source team is here to give you a hand.

> This content is inspired by Zalando's Open Source [documentation](https://opensource.zalando.com/docs), which has an [MIT license](https://github.com/zalando/zalando.github.io/blob/master/LICENSE).

### Overview
Releasing a new open source project is straightforward, just follow these guidelines:

- Get approval: ensure you have organizational buy-in from your manager and that it is permissible to open source your project
- Employ best practices: ensure your project follows established and successful practices
- Prepare your repository: clean up and refactor your code to work outside the Sauce Labs environment
- Get reviewed: the Sauce Labs Open Source team can help and will review your project

[Submit your project for review](https://docs.google.com/forms/d/e/1FAIpQLSdDi_-WhKZ2cVJwnG5n4yXNHGIrvaYUyZuVBt8K7rcqHJVIwg/viewform?usp=sf_link).

### Get approval
The first step is to confirm that your manager and team are on board with open sourcing your project, that everyone understands the time and effort required, and that the project will not expose any proprietary or confidential company technology or processes.

#### Get acceptance from your team and your manager
Let your manager know that you would like to open source your project, and make sure you have their support. Open sourcing code is a process that requires time and effort, so make sure your manager and your team understand that some of your work hours will be spent maintaining this project and the community around it.

[Approval Guide for managers](/docs/approval-guide/)

#### What cannot be open sourced?
You cannot publish anything on GitHub that exposes any proprietary company technology or processes. This normally means any code or technology built in house that is vital in the process of giving our customers a unique experience.

If you are in doubt, please reach out to the [Open Source team](https://wiki.saucelabs.com/display/OSS/Open+Source+Team) or ask your manager for instructions.

### Use best practices
Follow the guidelines that are present in many of the most renowned open source projects. By adhering to the items listed below you will be certain to get your roject started on the right foot.

#### Include the required assets
Use the [new-project](https://github.com/zalando-incubator/new-project) template as a boilerplate for the files required for your project. These files are needed to correctly communicate ownership and guidelines for the project:

- Create a meaningful README.md file - this is your most important piece of documentation, and it should contain:
    - A overall description and the purpose of your project
    - How to install it
    - How to use it (with examples)
    - If applicable, extended documentation explaining more elaborate use cases
- Include a MAINTAINERS.md file with contact information
- Include a CONTRIBUTION.md file with guidelines on how to contribute, including:
    - How to set up and develop the project
    - If necessary, an explanation of code style
    - How to run and write tests
    - How to write documentation or, if applicable, how to generate it
    - A list of requirements to contribute a patch (this could also be described in a pull request [template](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates))
- Include a CODE_OF_CONDUCT.md file with guidelines that establish expectations for behavior by participants (maintainers, contributors, users) working on your project
- Include a SECURITY.md file
- Add a LICENSE.md file; the license must be MIT with the copyright attributed to Sauce Labs
- Ensure you only use license-compatible code/dependencies (see [licensing](/docs/license-guide/))

The Open Source team can help you to set this up for an initial review.

#### Set up the environment for proper collaboration

When the project has been released as a public project on GitHub the following workflows are expected to be part of the project:

- Semantically version project artifacts. You MUST tag all versions in GitHub with the exact version name: e.g., 0.1.0
- Make sure that no credentials, private identifiers or personal data is present at any time in your repository
- Make sure code reviews are conducted by least 2 Saucers on all code to minimize the risk of security backdoors and code vulnerability.
- Make sure there is an active team of maintainers consisting of at least 2 Saucers who will take ownership of the project
- Make sure there is a Continuous Integration setup in place that runs all tests and measures coverage for every commit in every branch and in every pull request
- Make sure there is a code analysis tool (like Codacy or SonarQube) checking the code health for every commit in every branch and also for all pull requests

#### Community best practices
Projects that have been widely embraced by the open source community share a few things in common. Here are a few that we highly recommend you implement:

- Have a code of conduct and enforce it to create a safe environment for collaboration
- Set clear expectations for responses - let users know if your time is limited
- Ask for help and be open to the kind of contributions that will be helpful to your project
- Be mindful of your documentation

[opensource.guide](https://opensource.guide/building-community/) has plenty more resources and recommendations for maintainers.

### Copyright and ownership
All code released by Saucers must be released under the Sauce Labs GitHub organization. The copyright is owned by Sauce Labs.

### Prepare your repository
Having a repository ready to be open sourced is more than following the previous recommendations, it is also about having refactored and documented code that helps users and potential contributors make sense of it. A few more things to be on the look-out for:

- Make sure you do not have any tokens, passwords or confidential data in your code
- Make sure the commit history is clean and avoid references to internal documents or Jira tickets
- Make sure the code doesn’t require any Sauce Labs-specific infrastructure or access, so users can use in their own environment
- Make sure your code is clean and commented so newcomers can see what is going on
- Make sure your dependencies are updated and does not have any known security issues
- Make sure that it is easy to get up and running anywhere, not just on your machine

### Get Reviewed
When you have checked off the previous recommendations checklist and have prepared your code for release, submit a review request to the Open Source team. They will help you set up a GitHub repository in the Sauce Labs organization and sign off on open sourcing your project.

### Release
When all the above points are in order and the review has been passed, the project is released to the Sauce Labs GitHub organization. All released projects are then reviewed over a 6 month period to double-check they are still providing value to the community.

As part of the release, we encourage you to draft an accompanying blog post to describe the project and the benefits it provides to the community. Please coordinate with the Open Source team to get the draft completed and published.
