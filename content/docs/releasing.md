---
title: "Releasing a new Open Source project"
description: "Releasing a new Open Source project"
draft: false
---

Here you can see all the steps that describe how Saucers can release a new Open Source project. This is a simple process and in case you need help to go through it, the Open Source team is here to give you a hand.

### Overview
Releasing a new open source project is a simple process, just check the following sections:

- Get approval: Ensure you have organizational buy-in from your manager and that it is possible to open source your project.
- Use best practices: Ensure your project follows the Open Source best practices
- Prepare your repository: Clean up and refactor your code to work outside the Sauce Labs environment.
- Get Reviewed: The Sauce Labs Open Source team can help and will review your project

[Submit your project for review](https://docs.google.com/forms/d/e/1FAIpQLSdDi_-WhKZ2cVJwnG5n4yXNHGIrvaYUyZuVBt8K7rcqHJVIwg/viewform?usp=sf_link).

### Get approval
Ensure your manager and team are on board with open-sourcing your project, that everyone understands the time and effort required, and that there are no competitive disadvantages to Sauce Labs.

#### Get acceptance from your team and your manager
Make sure your manager is informed about open-sourcing your project, and that your manager is supporting you in this process. Open-sourcing code is a process that requires time and effort, so make sure your manager and your team understand that some of your work hours will be spent maintaining this project and the community around it.

[Approval Guide for managers](/docs/approval-guide/)

#### What cannot be open-sourced?
You cannot publish anything on GitHub that could risk the advantage that Sauce Labs has over its competitors. This normally means any code or technology built in house which is vital in the process of giving our customers a unique experience.

If you are in doubt, please reach out to the [Open Source team](https://wiki.saucelabs.com/display/OSS/Open+Source+Team) or ask your manager for instructions.

### Use best practices
Follow a few guidelines that are present in many of the most renowned Open Source projects, satisfy the following 3 areas and you will get your Open Source project started on the right foot.

#### Include the required assets
Use the [new-project](https://github.com/saucelabs/new-project) template as a boilerplate for the files required for your project. These files are needed to correctly communicate ownership and guidelines for the project:

- Create a meaningful README.md file, this is your most important piece of documentation, it should contain:
    - Main description and purpose of your project
    - How to install it
    - How to use it (with examples)
    - If applicable, an extended documentation explaining more elaborated use cases
- Include a MAINTAINERS.md file with contact information
- Include a CONTRIBUTION.md file with guidelines on how to contribute, it should include:
    - How to set up and develop the project
    - If necessary, explanation of code style
    - How to run and write tests
    - How to write documentation or, if applicable, how to generate it
    - A list of requirements to contribute a patch (this could also be described in a pull request [template](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates))
- Include a CODE_OF_CONDUCT.md file with guidelines that establish expectations for behavior for your project's participants (maintainers, contributors, users…)
- Include a SECURITY.md file
- Add a LICENSE.md file, license must be the MIT license with the copyright set to Sauce Labs
- Ensure you only use license-compatible code/dependencies (see [licensing](/docs/license-guide/))

The Open Source team can help you to set this up for an initial review.

#### Set up the environment for proper collaboration

When the project has been released as a public project on GitHub the following workflows are expected to be part of the project:

- Semantically version project artifacts. You MUST tag all versions in GitHub with the exact version name: e.g., 0.1.0
- Make sure that no credentials, private identifiers or personal data is at any time present in your repository
- Make sure code-reviews with by least 1 Sauce employee on all code to minimize the risk of implanted security backdoors and vulnerable code.
- Make sure there is an active team of maintainers of at least 2 Saucers taking ownership of the project
- Make sure there is a continuous integration setup in place that runs all linting, tests and measures coverage for every commit in every branch and in every pull request

#### Community best practices
Different Open Source projects that have been embraced by the community have a few things in common, here are some that we require you to implement:

- Have a code of conduct and enforce it to create a safe environment for collaboration
- Set clear expectations for responses - let users know (e.g. in the SUPPORT.md file) if your time is limited
- Ask for help and be open to what kind of contributions would help your project
- Be mindful of your documentation

[opensource.guide](https://opensource.guide/building-community/) has plenty more resources and recommendations for maintainers.

### Copyright and ownership
All code released by Saucers must be released under a Sauce Labs managed GitHub organization and its copyright is owned by Sauce Labs.

### Prepare your repository
Having a repository ready to be open-sourced is more than following the previous recommendations, it is also about having refactored and documented code that facilitates users and potential contributors to make sense of it. A few more things to look out are:

- Make sure you do not have any tokens, passwords or confidential data in your code
- Make sure the commit history is clean and avoid references to internal documents or Jira tickets.
- Make sure the code doesn’t require any Sauce Labs-specific infrastructure or access, so users can use in their own environment
- Make sure your code is clean and commented so newcomers can see what is going on
- Make sure your dependencies are updated and does not have any known security issues
- Make sure that it is easy to get up and running, not just on your machine

### Get Reviewed
When you have checked off the previous recommendations checklist and prepared your code for release, request a review from the Open Source team who will help you set up a GitHub repository in the Sauce Labs organization and sign off on open-sourcing your project.

### Release
When all the above points are in order and the review has been passed, the project is released to a Sauce Labs managed GitHub organization. All released projects are then reviewed over a 6 month period to double-check they are still valuable for the community.

As part of the release, it is highly encouraged that a blog post is drafted, where the project and its benefits for the community are described (see an example). Please coordinate with the Open Source team to get the draft completed and published.
