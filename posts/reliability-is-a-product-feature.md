---
title: Reliability Is a Product Feature
date: 2026-06-10
category: Product
summary: Uptime, latency, and graceful failure aren't just engineering concerns — they shape how customers experience and trust a product.
---

# Reliability Is a Product Feature

When teams talk about "the product," they usually mean the things you can see:
the screens, the flows, the copy. But there's a quieter half of the product that
customers feel just as strongly — **whether it works, every time, fast.**

## Trust is built in milliseconds

A customer doesn't file a Jira ticket that says *"latency regressed by 400ms."*
They just feel that the app got slow, decide it's flaky, and reach for a
competitor. Reliability is the part of the experience nobody notices until it's
missing.

From my time as a Site Reliability Engineer, three ideas stuck with me:

- **Errors are UX.** A 500 page is a screen in your product — design it.
- **Latency is a feature.** Speed changes behaviour more than most A/B tests.
- **Recovery is a feature.** How gracefully you degrade is part of the brand.

## Bringing SRE thinking to the roadmap

The best thing a product manager can do is make reliability *legible* to the
business:

1. Put error budgets and key latencies on the same dashboard as activation and
   retention.
2. Treat a painful incident as a discovery interview — it's telling you where
   the product is weakest.
3. Budget for it. "We'll harden it later" is how later never comes.

> Reliability isn't the absence of a feature. It *is* the feature — the one that
> makes all the others trustworthy.

That shift, from *"keep the lights on"* to *"this is part of what we're selling,"*
is where SRE and product management meet. It's the space I like working in.
