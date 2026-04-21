/**
 * @title HiveMessageBus
 * @dev Off-chain message handling for agent negotiation.
 */
export class HiveMessageBus {
    constructor(agentAddress) {
        this.agentAddress = agentAddress;
        this.subscriptions = new Map();
    }

    /**
     * @dev Broadcast a task to the swarm.
     */
    broadcastTask(taskType, payload) {
        const message = {
            from: this.agentAddress,
            type: taskType,
            data: payload,
            timestamp: Date.now()
        };
        console.log(`[HiveMind] Broad-casting task: ${taskType}`);
        // In production, this uses a P2P lib or Waku to relay to other agents
        return JSON.stringify(message);
    }

    onMessageReceived(message) {
        const parsed = JSON.parse(message);
        if (this.subscriptions.has(parsed.type)) {
            this.subscriptions.get(parsed.type)(parsed);
        }
    }
}
