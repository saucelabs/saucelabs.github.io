---
title: "How a Hackathon Improved User Experience"
date: 2020-12-10T09:00:00+02:00
description: "How two frontend devs improved the UX through a Hackathon."
author: "Diego Molina"
authorTwitterHandle: "diegofmolina"
images:
  - /images/blog/how-a-hackathon-improved-user-experience/sauce_developer.png
tags:
  - ux
  - frontend
  - hackathon
---

{{< figure src="/images/blog/how-a-hackathon-improved-user-experience/sauce_developer.gif" class="img-responsive">}}

A hackathon took place a few months ago within the Engineering organization at
Sauce Labs. One of the best projects was the one implemented by
[Elisabeth Vonesch](https://www.linkedin.com/in/elisabeth-vonesch/) and
[Russ Rinzler](https://www.linkedin.com/in/russrinzler/). Elisabeth (Lisa) is a
frontend developer, with a background in Film & Cinema. She is a curious career
switcher and has been working in tech for about one year. Russ is a Senior frontend
developer with over seven years of experience at different companies, including Slack
and Credit Karma. Russ also has a background in Fine Arts. They both are dog lovers
and pair often to develop technical tasks at the Live Testing team.

Their idea was to improve the Real Device Cloud (RDC) device search for Live Testing
by providing a smoother user experience (UX) while a customer was looking for the device
they needed. As the search and filters feature is commonly used, this improvement will
create a better experience for the user during their regular testing.

I had the pleasure of having a chat with both of them about their hackathon project and
how it made it all the way from a hackathon to the production environment.

### What was the hackathon idea? What problem were you trying to solve with it?

_Russ:_ Well, there was a hackathon, and I just wanted to participate and see if my teammates
wanted to as well. For me personally, I was very flexible on a topic. I just wanted to see if
I could empower my teammates to work on something to improve our product, because they usually
have good ideas, but like many companies, we get caught up in feature development or bug fixing.
I just don’t remember if this idea was on the roadmap or not.

_Lisa:_ It was not on the roadmap, but I remember we talked about it actually. The idea was to
improve the search engine that customers use to find devices in RDC. The behaviour was laggy
because the Sauce Labs frontend was doing an API call every second to update the device
availability, and after that, it would apply the search filters the user had configured.

We realized that the Test Object legacy app had a smooth UX, probably because the search was done
locally, and while moving users from Test Object to the unified platform on Sauce Labs, there was
a significant drop in the UX for the RDC search. So, with this idea, we wanted to improve the UX
for Sauce Labs customers by moving the search to be local in the browser.

### As this idea was not part of the roadmap, do you think it would have happened if there was no hackathon?

_Russ:_ Probably not, and the reason for that is we've been busy with feature work or the usual
stuff that's in our roadmap. Something that has helped me to support these ideas, and I can't speak
for my colleagues, but for me personally, I've been pushing much more for that 20% individual time
that our Director of Engineering has been telling us to use. I've been able to do things like
finish up work on a talk, and I've been getting analytics for our frontend. Right now, we're tracking
the success of the local search filter by the number of API calls saved. We will roll it out in a
couple of weeks to everybody once we have some data on how beneficial it is for the user and the company.

### The hackathon was just two days, how did you plan your work to have something that could be shown in a demo and convince Product to implement it?

_Russ:_ We did have a session together to scope and plan out the work beforehand, we started a
shared document where we wrote down basic tasks.

_Lisa:_ We did split it into smaller steps and slowly covered all aspects, but I think we started
with a simple use case, a real device selection, just a filter. Going through the use case, step
by step, and then we switched to other use cases, following the same approach. We definitely had
some work prepared, and we even looked into the libraries we could use beforehand.

_Russ:_ We approached it through a Technical Specification, breaking down the tasks we need to do,
and their priority. We planned the work as what could be an Minimum Viable Product (MVP) that we
can show off in two days of work. Then, if we have time, what are the next steps that we can take
to flesh it out a bit more. I'm definitely a stickler for too many details up front, rather than too
few, but I'm okay with that because that means I get to deliver features on time.

### Given the virtual nature of work this year, how did you implement the planned tasks? Did you split the tasks or did you work together?

_Lisa:_ We really did intense pair programming.

_Russ:_ Yeah, for the most part Lisa did most of the driving and there were times where something
was on fire and I needed to step out to a meeting or something, but because the steps were outlined
and we knew what the next step was and how it was supposed to be implemented, it was easy for me to
drop off and for Lisa to continue working on it.

_Lisa:_ I think we've also experienced different tools, we tried the collaboration tool from Visual
Studio Code, but then we switched back to Zoom. At the beginning, I was just driving and Russ was
the navigator, and later we got to the point where I wanted to do things by myself or we exchanged
roles. It was a knowledge sharing session.

### What is important for you in pairing sessions?

_Russ:_ In general, if I'm navigating I will tell the driver what needs to be done in terms of the
implementation. I try to be a bit loose in general in terms of how exactly it should be done. I
think the concrete implementation will be a combination of both of our implementations. It won’t
be exactly how I imagined it in my head, but it works. I think it's important for both people to
question what's being written. Does this cover all the cases? And if so, I think it's important
that both sides can compromise to like what they want to contribute, so long as it works and it's robust.

_Lisa:_ One thing that I really appreciate, which made all this a very good experience, is that
Russ was very careful about working on all this step by step. Especially by finishing and wrapping
up one step before you move on to the next. In the end, it wouldn't have mattered if we hadn't
managed to finish everything we had planned because we always had some finished tasks. The result
of every step was something we could show for the work we've done.

### You did well on the hackathon, it was one of the best projects. Did you struggle to get time during the regular work tasks and move this UX improvement into production?

_Lisa:_ To be honest, we made a good effort to have a good demo, and I think that paid off. We focused
to demonstrate how the end user would benefit from the improvement and this helped to sell the idea
as something that needs to be done. This helped to raise awareness on the UX problem, showing how
the legacy app was doing a better job than the new app, and how that would help for user adoption.
Helping people to visualise that through the demo was very helpful.

In addition, this was an opportunity to not only add new features without thinking about the usability
and how we can improve already existing code to make it better.

_Russ:_ I don't remember having to convince our Product Manager to put this into our sprint. I believe
the demo actually helped a lot.

### Here is the before and after the idea was implemented, it can be clearly noted how the UX is improved

{{< figure src="/images/blog/how-a-hackathon-improved-user-experience/current_behavior_search.gif" class="img-responsive" caption="Search (before - laggy)" >}}

{{< figure src="/images/blog/how-a-hackathon-improved-user-experience/new_behavior_search.gif" class="img-responsive" caption="Search (after - smooth)">}}

{{< figure src="/images/blog/how-a-hackathon-improved-user-experience/current_behavior_filter.gif" class="img-responsive" caption="Filter (before - laggy)" >}}

{{< figure src="/images/blog/how-a-hackathon-improved-user-experience/new_behavior_filter.gif" class="img-responsive" caption="Filter (after - smooth)" >}}

After chatting with Lisa and Russ, understanding how they came up with the idea, planned it
and developed it during the hackathon, here are my main takeaways:

- Hackathons are an opportunity to innovate and improve, sometimes people don’t join them
  because they don’t find ideas. But I believe there is no small idea, and you can always find
  things to improve in the product you are working on, and slowly develop a skill to create new
  ideas. In this case, improving the user experience was the perfect justification for this idea.

- You need to plan for a hackathon, at least for a few hours, before it officially starts. I’ve
  seen many times how people plan their tasks for the hackathon during the first day of the event,
  and this dramatically reduces the chances of achieving something that can be shown by the end
  of the hackathon.

- Pair programming in remote environments works, but it also needs some planning and scope definition,
  so both the navigator and the driver know what to expect and how to move through the session.

What are your takeaways? How do you improve UX in your product?
