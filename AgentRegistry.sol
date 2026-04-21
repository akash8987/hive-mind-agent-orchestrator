// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title AgentRegistry
 * @dev On-chain directory for autonomous agents in the Hive Mind.
 */
contract AgentRegistry {
    struct AgentProfile {
        address wallet;
        string capability; // e.g., "ZK_AUDIT", "LIQUIDITY_ARBITRAGE"
        uint256 reputation;
        bool isActive;
    }

    mapping(address => AgentProfile) public agents;
    address[] public agentList;

    event AgentJoined(address indexed agent, string capability);

    function joinHive(string calldata _capability) external {
        agents[msg.sender] = AgentProfile(msg.sender, _capability, 100, true);
        agentList.push(msg.sender);
        emit AgentJoined(msg.sender, _capability);
    }

    function getAgentCount() external view returns (uint256) {
        return agentList.length;
    }
}
