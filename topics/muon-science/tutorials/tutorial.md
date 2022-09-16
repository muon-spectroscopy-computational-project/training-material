---
layout: tutorial_hands_on
title: Working with MuSpinSim for simulating muon spin experiments
questions:
- What is Muspinsim?
- What can we do with Muspinsim?
objectives:
- Learn about Muspinsim and what it can do
- Learn about the Muspinsim input keywords
- Learn about the types of muon spin experiments
time_estimation: 30min
key_points:
- 
contributors:
- anish-mudaraddi

---


# Introduction
{:.no_toc}

The practical aims at familiarzing you with Muspinsim. The target audience is material or muon scientists.

> ### Agenda
>
> In this tutorial, we will cover:
>
> 1. TOC
> {:toc}
>
{: .agenda}

> ### {% icon comment %} Background

For the purpose of this tutorial, a set of example galaxy workflows have been created showing you how to model 
different types of muon experiments using Muon Galaxy: [MuonGalaxy](https://muongalaxy.stfc.ac.uk). 

## How to run the workflows

> ### {% icon hands_on %} Hands-on: Using the Workflow
>
> 1. Create a new history for this tutorial. 
>
>    {% snippet faqs/galaxy/histories_create_new.md %}
>
> 2. Upload the workflow. 
>
>
> 3. Run the workflow
>
> 
> 4. Show the resulting plot
>
> 

# Workflow 1 - Zeeman Coupling

Zeeman coupling term is used to specify a local magnetic field.
Applied to all spins

magnetic field in the example aligned to z axis. It will produce a full procession of entire muon polarisation

## Workflow 2 - Hyperfine Coupling

A hyperfine tensor couples the spin with one electron in the system
In this example, there is only one electron, so hyperfine couples the spin to that

In this example we expect an oscillation of muon's polarisation

## Workflow 3 - Hyperfine Coupling with powder averages

Hyperfine tensor set and full averaging over 1000 solid angles carried out.
Each of these orientations will contribute an ocillation at different frequencies. 

Overall sum of contribution shows decay over time due to dephased individual ocillations cancelling otut

## Workflow 4 - Avoided Level Crossing

An Avoided Level Crossing (ALC) experiment which involves three spins - a muon, electron and hydrogen atom.


## Workflow 5 - Temperature

In this example we look at the effect of changing temperature.
Example similar to Hyperfine Coupling workflow, but with external static field of 1 T

## Workflow 6 - Dissipation

Dissipation term given for spin

## Workflow 7 - Fitting 

We can fit some data with MuspinSim, this example requires some fake simulated data. 
Data is formatted into two columns and normalised

We define g as 0.1 and fitting will be run. This example will take longer as the experiment needs to be rerun
and each time g is evaluated until it converges on a value close to g = 3.0
