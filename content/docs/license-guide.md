---
title: "Open Source Licensing Guide"
description: "Policies and guidance on which licenses can be used at Sauce Labs"
draft: false
---

Here you will find a list of policies and guidance concerning which licenses can be used at Sauce Labs, both internally and in open source projects hosted under a Sauce Labs managed GitHub organization.

Understanding and respecting the licenses of your project dependencies is important when using and releasing open source software. The purpose of this document is to outline which licenses can be freely used, those that come with special requirements, and which licenses to avoid.

### Summary

- Any dependency with a Permissive license can be used
- For internal projects, Permissive, Strong and Weak Copyleft licensed code can be used
- For Open Source projects, Strong Copyleft licensed code cannot be used
- Make sure to investigate the specific terms of the Weak Copyleft licenses
- You cannot use AGPL or variants thereof licensed code anywhere
- You cannot use Commons Clause licensed code anywhere
- You cannot use unlicensed code anywhere

### License overview

Overall there are three types of licenses which you can use:

- Permissive licenses
- Weak copyleft licenses
- Strong copyleft licenses

And three types which you **can not** use in any way:

- Code licensed under AGPL or variants thereof
- Guidance on Commons Clause and similar
- WTFPL and Beerware
- Unlicensed code

This document is intended to provide a general overview and does not represent legal advice. Always check the details of each license and if you are in doubt, get in touch with the OSPO.

If you wish to use a dependency with a license not listed in this guide, please get in touch with the Open Source team.

### Permissive licenses

This refers to code dependency which you are free to use and change without limitations, but must include the license and copyright of the dependency. Permissive licensed dependencies can be used without issues both for internal and for open source projects.

Examples include [AFL](https://tldrlegal.com/l/afl3), [Apache](https://tldrlegal.com/l/apache2), [BSD](https://tldrlegal.com/l/bsd3), [MIT](https://tldrlegal.com/l/mit), [MS-PL](https://tldrlegal.com/l/mspl), [ISC](https://tldrlegal.com/l/isc), [PHP License](https://tldrlegal.com/license/the-php-license-3.0.1), and many more.

- You are free to: use commercially, modify, distribute, and sublicense.
- You must include: copyright and license
- You cannot hold the author liable.

### Weak copyleft licenses

This refers to code dependency which you are free to use and change, but must include the source code, the license, and copyright of the dependency, but only if you distribute the software. You can license your own code however you want, and you must only share the source code of the reciprocally licensed dependency.

Examples include [APSL](https://tldrlegal.com/l/aspl2), [CDDL](https://tldrlegal.com/l/cddl), [CPL](<https://tldrlegal.com/license/common-public-license-1.0-(cpl-1.0)>), [EPL](https://tldrlegal.com/l/epl), [IPL](https://tldrlegal.com/l/ipl), [MPL](https://tldrlegal.com/l/mpl-2.0).

- You are free to: use commercially, modify, distribute, and sublicense.
- You must include: copyright, license, changelog, source code and install instructions
- You cannot hold the author liable or use the authors' trademarks.

### Strong copyleft licenses

This refers to code dependency which requires you to license all your code under the same license if you want to distribute it. If only used internally, you have no obligation to release neither source nor binary. The dependency can therefore only be used for internal projects, but not for projects which will be distributed outside of Sauce Labs, such as Open Source projects or code that is distributed to end-users.

Examples include [BCL](https://www.oracle.com/downloads/licenses/binary-code-license.html), [GPL](https://tldrlegal.com/l/gpl-3.0), [LGPL](https://tldrlegal.com/l/lgpl-3.0), [NPL](<https://tldrlegal.com/license/netscape-public-license-v1.1-(npl-1.1)>), [OSL](<https://tldrlegal.com/license/open-software-license-2.1-(osl-2.1)>), [QPL](<https://tldrlegal.com/license/q-public-license-1.0-(qpl-1.0)>).

- You are free to: use commercially, modify and distribute
- You must include: copyright, license, source code, changelog, the original source and install instructions
- You cannot hold the author liable or sublicense
- If distributed, you must license your code under the same license.

### Code licensed under AGPL or variants thereof

These licenses trigger the copyleft provision even when it is not distributed. If code under these licenses is used to deliver a web-service such as saucelabs.com, all code, and code linked to the service must be licensed and distributed under a similar license.

The use of dependencies licensed under these licenses represents a big risk for Sauce Labs, so even for projects which are not directly linked to any of our web services, it must not be used as the benefits compared to the risks are small.

Code licensed under [AGPL](https://tldrlegal.com/l/agpl3), [SSPL](https://www.mongodb.com/licensing/server-side-public-license), [RPL](<https://tldrlegal.com/license/reciprocal-public-license-1.5-(rpl-1.5)>), [EUPL](https://spdx.org/licenses/EUPL-1.2.html), and [CPAL](<https://tldrlegal.com/license/common-public-attribution-license-version-1.0-(cpal-1.0)>), may not be used at Sauce Labs.

### Guidance on Commons Clause and similar

The Commons Clause license is a new license being used as a wrapper around existing licenses such as the Apache or MIT license and adds additional limits on commercial use of the software. The intent is to limit cloud providers to use the software, but the license language targets commercial use and monetization very broadly.

Sauce Labs is not a Cloud provider (it is a SaaS), it is a commercial endeavor and the way the software is used internally is without question commercial, this license is therefore not suitable for Sauce Labs for the following reasons:

- The Commons Clause is not approved by OSI and is therefore not open source, furthermore, the language of the license is unclear in regards to what is proper use, if, in breach of this license, Sauce Labs must publish all associated assets such as interfaces, build systems and modifications made under the same license.
- Sauce Labs uses and supports Open Source under the belief that it is the freedom to use, modify, and distribute which have enabled its success. The projects using these licenses still enjoy the full freedoms and benefits from Open Source, but at the same time, limit the freedom of others to use their code - Sauce Labs does not wish to support this development.

### WTFPL not allowed

Code released under the [WTFPL](http://www.wtfpl.net/) cannot be used at Sauce Labs. This license has a large number of issues (lack of warranty disclaimer, very vague rights grant), and was also rejected as an open source license by OSI. We also do not allow contribution to projects under the WTFPL.

The [Beerware](http://en.wikipedia.org/wiki/Beerware) license has similar issues to the WTFPL on account of its vague grant of rights and likewise **cannot be used at Sauce Labs**, nor can Beerware-licensed projects be patched by Saucers.

### Unlicensed code

Code that does not include a license or has no clear ownership **cannot be used at Sauce Labs**.

As per standard copyright law, any code which is not explicitly licensed is the property of the author and cannot be used without permission.

However, if you wish to use a library that has no license, first of all, check with the author to see if the license is simply not distributed with the source code. If the project author has not included a license, open a pull request and suggest a license such as MIT.
