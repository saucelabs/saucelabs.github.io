---
title: "Releasing a new Open Source project"
description: "Releasing a new Open Source project"
draft: false
images:
    - /images/docs/releasing.svg
---

Here you can see the steps that describe how Saucers can release a new open source project. This is a simple process, and if you need help going through it the Open Source team is here to give you a hand.

### Overview
Releasing a new open source project is straightforward, just follow these guidelines:

{{< figure src="/images/docs/releasing.svg" class="img-responsive text-center" >}}

- [Questions to answer](#questions-to-answer): first, answer these questions for yourself and your team
- [Get approval](#get-approval): ensure you have organizational buy-in from your manager and that it is permissible to open source your project
- [Employ best practices](#use-best-practices): ensure your project follows established and [successful practices](https://opensource.saucelabs.com/docs/releasing/#use-best-practices)
- [Prepare your repository](#prepare-your-repository): clean up and refactor your code to work outside the Sauce Labs environment
- [Get reviewed](#get-reviewed): the Sauce Labs Open Source team can help and will review your project
- [Release](#release): you're ready to go -- tell everyone!

[Submit your project for review](https://docs.google.com/forms/d/e/1FAIpQLSdDi_-WhKZ2cVJwnG5n4yXNHGIrvaYUyZuVBt8K7rcqHJVIwg/viewform?usp=sf_link).

### Questions to Answer

Before you begin the process in earnest, you'll want to be prepared to answer the following questions.  Think on these and discuss with your team and manager.  This will help answer why open-sourcing is right for your project--or not!

#### How does this project benefit a community?

- Other than Sauce Labs itself, does this project benefit a specific community?  - Would it benefit a community _as-is_--without any further outside contributions--or would it _require_ outside contributions to be useful?
- If it _does_ benefit a community, what community does it benefit?
- If it _does not_ benefit a community, then who does it benefit?
- What _existing_ open-source projects are in the same space?
- Would this project be suitable for an open governance model (where Sauce Labs shares control of the project with other entities), now or in the future?

#### Could this project compete directly with Sauce Labs?

- How similar is this project to a product or service that Sauce Labs sells to its clients?
- Would it be suitable to instead sell this project as a product or service? Why or why not?
- Would a client want to choose this project _instead of_ purchasing products or services from Sauce Labs?
- Is the project _ancillary_ to Sauce Labs' core line of business?
- Does the project compete directly with a client?
- If the answer to any of the above is "yes," is it possible to reduce the scope or otherwise _split_ the project in such a way that the answer will be "no"? For example, would an [open-core model](https://en.wikipedia.org/wiki/Open-core_model) work?

#### How would open-sourcing this project help our clients achieve their goals?

- Are clients _asking_ that Sauce Labs open-source this project?
- If the project already exists, is its proprietary nature _negatively impacting_ its evolution or adoption?
- Do you know of clients or other entities that are ready and willing to contribute?

#### Can you maintain this project?

- Open-source project maintenance can be a significant time burden--do you and/or your team have the time?  If not, then who?
- If the project becomes popular, how will you adapt to the increased demands from the OSS community?
- What will happen to the project if, in the future, you no longer have the resources to maintain it?  
- How do you intend to handle community contributions?  To what extent will the community be involved in decision-making?

### Get approval
The first step is to confirm that your manager and team are on board with open sourcing your project, that everyone understands the time and effort required, and that the project will not expose any proprietary or confidential company technology or processes.

#### Get acceptance from your team and your manager
Let your manager know that you would like to open source your project, and make sure you have their support. Open sourcing code is a process that requires time and effort, so make sure your manager and your team understand that some of your work hours will be spent maintaining this project and the community around it.

[Approval Guide for managers](/docs/approval-guide/)

#### What cannot be open sourced?
You cannot publish anything on GitHub that exposes any proprietary company technology or processes. This normally means any code or technology built in house that is vital in the process of giving our customers a unique experience.

If you are in doubt, please reach out to the [Open Source team](https://wiki.saucelabs.com/display/OSS/Open+Source+Team) or ask your manager for instructions.

### Use best practices

Follow the guidelines that are present in many of the most renowned open source projects. By adhering to the items listed below you will be certain to get your project started on the right foot.

#### Include the required assets
Use the [new-project](https://github.com/saucelabs/new-project) template as a boilerplate for the files required for your project. These files are needed to correctly communicate ownership and guidelines for the project:

- Create a meaningful README.md file - this is your most important piece of documentation, and it should contain:
    - A overall description and the purpose of your project
    - How to install it
    - How to use it (with examples)
    - If applicable, extended documentation explaining more elaborate use cases
- Include a CONTRIBUTION.md file with guidelines on how to contribute, including:
    - How to set up and develop the project
    - If necessary, an explanation of code style
    - How to run and write tests
    - How to write documentation or, if applicable, how to generate it
    - A list of requirements to contribute a patch (this could also be described in a pull request [template](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates))
- Include a CODE_OF_CONDUCT.md file with guidelines that establish expectations for behavior by participants (maintainers, contributors, users) working on your project (only necessary if your project has custom wording different from our default [CODE_OF_CONDUCT.md](https://github.com/saucelabs/.github/blob/master/CODE_OF_CONDUCT.md))
- Include a SECURITY.md file (only necessary if your project has special requirements for security escalations compared to our default [SECURITY.md](https://github.com/saucelabs/.github/blob/master/SECURITY.md) for all projects)
- Add a LICENSE.md file; the license must be MIT with the copyright attributed to Sauce Labs
- Ensure you only use license-compatible code/dependencies (see [licensing](/docs/license-guide/))

The Open Source team can help you to set this up for an initial review.

#### Set up the environment for proper collaboration
When the project has been released as a public project on GitHub the following workflows are expected to be part of the project:

- Semantically version project artifacts. You MUST tag all versions in GitHub with the exact version name: e.g., 0.1.0
- Make sure that no credentials, private identifiers or personal data is present at any time in your repository.
- Make sure code reviews are conducted by least 2 Saucers on all code to minimize the risk of security backdoors and code vulnerability.
- Make sure there is an active team of maintainers consisting of at least 2 Saucers who will take ownership of the project.

We recommend to also:

- Make sure there is a Continuous Integration setup in place that runs all tests and measures coverage for every commit in every branch and in every pull request.

#### Community best practices
Projects that have been widely embraced by the open source community share a few things in common. Here are a few that we highly recommend you implement:

- Have a code of conduct and enforce it to create a safe environment for collaboration
- Set clear expectations for responses - let users know if your time is limited
- Ask for help and be open to the kind of contributions that will be helpful to your project
- Be mindful of your documentation

[opensource.guide](https://opensource.guide/building-community/) has plenty more resources and recommendations for maintainers.

#### Copyright and ownership
All code released by Saucers must be released under a Sauce Labs owned GitHub organization. The copyright is owned by Sauce Labs. Also make sure that:

- any non-Sauce code is in a _third_party_ directory.

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
