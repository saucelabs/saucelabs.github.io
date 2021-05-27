---
title: "Approval Guide for Managers"
description: "A handy guide for managers to review open source project requests."
draft: false
---

As a manager at Sauce Labs, your direct reports will ask from time to time if they can make an internal codebase an open source project. This can be a difficult question to answer, so to guide your decision-making, we have put together a handy guide for you to review.

We generally encourage managers to approve requests by teams to open source a project unless there’s a good reason not to. If you have any questions, you can reach out to [opensource@saucelabs.com](opensource@saucelabs.com).

Also, every request to open source will be reviewed and must be approved by our Open Source Program Office (and usually in collaboration with Legal, Product, and so on). Feel free to reach out to the OSPO for advice beforehand, if you would like.

### Summary

To determine if a project can be open sourced, you should be able to answer “yes“ to the following three questions. Detailed information for each is provided below:

**Value of ownership:** Do the maintainers and Sauce Labs benefit from open sourcing this code?

**Commitment:** Have you confirmed (and approved) that the maintainers will have the time to work on the project, and that they will promote it beyond Sauce Labs?

**Confidentiality:** Are you sure the source code does not expose any proprietary Sauce Labs information or IP, and that the source code will help users, not just the competition?

### Value of ownership

In short, does Sauce Labs benefit in any way from open sourcing this code? There can be several direct or indirect ways Sauce Labs can benefit, as listed below:

- **Internal use:** the code is used inside Sauce Labs and there is a vested interest in long term maintenance
- **Employer branding:** the project provides insight into the scale and problems that we solve at Sauce Labs
- **Hiring:** contributors and users of the project could be potential job candidates
- **Learning:** Saucers can collaborate with and learn from external experts on the topic
- **Enhancement:** the project could gain new functionality and refinement with external use and contribution

All of the benefits listed above will not apply to every single project under the Sauce Labs organization. Please use common sense and consider whether the project is too specific for the Sauce Labs environment, if it is too generic or if it will not have a real user base outside Sauce Labs.

### Commitment

An Open Source project requires maintenance, and therefore time and resources, which can be seen as:

- **Allocated time:** will the maintainers be granted work time to support the project - if so, how much?
- **Promotion:** maintainers are asked to promote their project and talk about it publicly, for example at conferences and in blog posts - does this fit with their schedule?

### Confidentiality

It goes without saying that some components working inside Sauce Labs should not be released as an open source project. Here are a few points that serve as guidelines:

- **Secret Sauce:** this project is vital and a core differentiator for Sauce Labs. It could show how test results are analyzed or how central parts of the platform are built.
- **Uses confidential data:** the project processes or relies on customer or employee data which cannot be exposed
- **Only useful to competitors:** the purpose of this project is not useful outside Sauce Labs, except for one or more competitors

### Additional Guidance

If you need any guidance before seeking approval to open source your project, please reach out to the open source team.

Every single project that requests to be open sourced will be reviewed by the Open Source Program Office, who may raise additional questions for you as a manager or to the maintainers.
