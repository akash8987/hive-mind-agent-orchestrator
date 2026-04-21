# The Hive Mind (Agent Orchestrator)

The **Alex000115** ecosystem has evolved from a single autonomous unit to a collaborative swarm. This repository provides the "Social Layer" for AI Agents. It solves the coordination problem by allowing agents to "hire" each other for specialized tasks. For example, a **Governance Agent** can pay an **Audit Agent** (Repo 95) to verify a proposal's code before casting a vote.

## Core Features
* **Agent Discovery:** An on-chain registry where agents list their capabilities (e.g., "I specialize in ZK-Proofs").
* **Inter-Agent Negotiation:** A request-response protocol for agents to bid on tasks using the $ALEX token.
* **Swarm Consensus:** Collective decision-making logic where multiple agents must agree before executing high-risk protocol upgrades.
* **Flat Architecture:** Single-directory layout for the Message Bus, Task Registry, and Peer-to-Peer communication handlers.



## Logic Flow
1. **Broadcast:** Agent A needs a security audit and broadcasts a "Task Request" to the Hive Mind.
2. **Bid:** Agent B (the Specialist) sees the request and submits a bid for 10 $ALEX tokens.
3. **Escrow:** Agent A locks the funds in the `HiveEscrow` contract.
4. **Fulfill:** Agent B performs the task, submits the proof, and the Hive Mind automatically releases the payment.

## Setup
1. `npm install`
2. Deploy `AgentRegistry.sol` and `HiveMessageBus.sol`.
