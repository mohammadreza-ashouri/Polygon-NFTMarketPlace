/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { CoderToken, CoderTokenInterface } from "../CoderToken";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061364c806100206000396000f3fe60806040526004361061012a5760003560e01c80635c975abb116100ab5780638da5cb5b1161006f5780638da5cb5b1461039957806395d89b41146103c4578063a457c2d7146103ef578063a9059cbb1461042c578063dd62ed3e14610469578063f2fde38b146104a65761012a565b80635c975abb146102ec57806370a0823114610317578063715018a6146103545780638129fc1c1461036b5780638456cb59146103825761012a565b80633659cfe6116100f25780633659cfe61461022a57806339509351146102535780633f4ba83a1461029057806340c10f19146102a75780634f1ef286146102d05761012a565b806306fdde031461012f578063095ea7b31461015a57806318160ddd1461019757806323b872dd146101c2578063313ce567146101ff575b600080fd5b34801561013b57600080fd5b506101446104cf565b6040516101519190612ac3565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c9190612764565b610561565b60405161018e9190612aa8565b60405180910390f35b3480156101a357600080fd5b506101ac61057f565b6040516101b99190612ce5565b60405180910390f35b3480156101ce57600080fd5b506101e960048036038101906101e491906126c1565b610589565b6040516101f69190612aa8565b60405180910390f35b34801561020b57600080fd5b50610214610681565b6040516102219190612d00565b60405180910390f35b34801561023657600080fd5b50610251600480360381019061024c919061265c565b61068a565b005b34801561025f57600080fd5b5061027a60048036038101906102759190612764565b6106b1565b6040516102879190612aa8565b60405180910390f35b34801561029c57600080fd5b506102a561075d565b005b3480156102b357600080fd5b506102ce60048036038101906102c99190612764565b6107e3565b005b6102ea60048036038101906102e59190612710565b61086d565b005b3480156102f857600080fd5b50610301610886565b60405161030e9190612aa8565b60405180910390f35b34801561032357600080fd5b5061033e6004803603810190610339919061265c565b61089d565b60405161034b9190612ce5565b60405180910390f35b34801561036057600080fd5b506103696108e6565b005b34801561037757600080fd5b5061038061096e565b005b34801561038e57600080fd5b50610397610afe565b005b3480156103a557600080fd5b506103ae610b84565b6040516103bb9190612a8d565b60405180910390f35b3480156103d057600080fd5b506103d9610bae565b6040516103e69190612ac3565b60405180910390f35b3480156103fb57600080fd5b5061041660048036038101906104119190612764565b610c40565b6040516104239190612aa8565b60405180910390f35b34801561043857600080fd5b50610453600480360381019061044e9190612764565b610d2b565b6040516104609190612aa8565b60405180910390f35b34801561047557600080fd5b50610490600480360381019061048b9190612685565b610d49565b60405161049d9190612ce5565b60405180910390f35b3480156104b257600080fd5b506104cd60048036038101906104c8919061265c565b610dd0565b005b6060603680546104de9061305b565b80601f016020809104026020016040519081016040528092919081815260200182805461050a9061305b565b80156105575780601f1061052c57610100808354040283529160200191610557565b820191906000526020600020905b81548152906001019060200180831161053a57829003601f168201915b5050505050905090565b600061057561056e610ec8565b8484610ed0565b6001905092915050565b6000603554905090565b600061059684848461109b565b6000603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006105e1610ec8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065890612c05565b60405180910390fd5b6106758561066d610ec8565b858403610ed0565b60019150509392505050565b60006012905090565b6106938161131f565b6106ae8160405180602001604052806000815250600061139e565b50565b60006107536106be610ec8565b8484603460006106cc610ec8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461074e9190612da3565b610ed0565b6001905092915050565b610765610ec8565b73ffffffffffffffffffffffffffffffffffffffff16610783610b84565b73ffffffffffffffffffffffffffffffffffffffff16146107d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d090612c25565b60405180910390fd5b6107e161156f565b565b6107eb610ec8565b73ffffffffffffffffffffffffffffffffffffffff16610809610b84565b73ffffffffffffffffffffffffffffffffffffffff161461085f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085690612c25565b60405180910390fd5b6108698282611611565b5050565b6108768261131f565b6108828282600161139e565b5050565b6000606560009054906101000a900460ff16905090565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108ee610ec8565b73ffffffffffffffffffffffffffffffffffffffff1661090c610b84565b73ffffffffffffffffffffffffffffffffffffffff1614610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095990612c25565b60405180910390fd5b61096c6000611772565b565b600060019054906101000a900460ff1680610994575060008054906101000a900460ff16155b6109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90612bc5565b60405180910390fd5b60008060019054906101000a900460ff161590508015610a23576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610a976040518060400160405280600a81526020017f49544d616e546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f49544d0000000000000000000000000000000000000000000000000000000000815250611838565b610a9f611925565b610aa7611a0e565b610aaf611af7565b610ada33610abb610681565b600a610ac79190612e4c565b620f4240610ad59190612f6a565b611611565b8015610afb5760008060016101000a81548160ff0219169083151502179055505b50565b610b06610ec8565b73ffffffffffffffffffffffffffffffffffffffff16610b24610b84565b73ffffffffffffffffffffffffffffffffffffffff1614610b7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7190612c25565b60405180910390fd5b610b82611be0565b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060378054610bbd9061305b565b80601f0160208091040260200160405190810160405280929190818152602001828054610be99061305b565b8015610c365780601f10610c0b57610100808354040283529160200191610c36565b820191906000526020600020905b815481529060010190602001808311610c1957829003601f168201915b5050505050905090565b60008060346000610c4f610ec8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610d0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0390612ca5565b60405180910390fd5b610d20610d17610ec8565b85858403610ed0565b600191505092915050565b6000610d3f610d38610ec8565b848461109b565b6001905092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610dd8610ec8565b73ffffffffffffffffffffffffffffffffffffffff16610df6610b84565b73ffffffffffffffffffffffffffffffffffffffff1614610e4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4390612c25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb390612b45565b60405180910390fd5b610ec581611772565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3790612c85565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa790612b65565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161108e9190612ce5565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561110b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110290612c65565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561117b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117290612ae5565b60405180910390fd5b611186838383611c83565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561120d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120490612b85565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112a29190612da3565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113069190612ce5565b60405180910390a3611319848484611cdb565b50505050565b611327610ec8565b73ffffffffffffffffffffffffffffffffffffffff16611345610b84565b73ffffffffffffffffffffffffffffffffffffffff161461139b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139290612c25565b60405180910390fd5b50565b60006113a8611ce0565b90506113b384611d37565b6000835111806113c05750815b156113d1576113cf8484611df0565b505b60006113ff7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611ed4565b90508060000160009054906101000a900460ff166115685760018160000160006101000a81548160ff0219169083151502179055506114cb85836040516024016114499190612a8d565b6040516020818303038152906040527f3659cfe6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611df0565b5060008160000160006101000a81548160ff0219169083151502179055506114f1611ce0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461155e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155590612b25565b60405180910390fd5b61156785611ede565b5b5050505050565b611577610886565b6115b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ad90612b05565b60405180910390fd5b6000606560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6115fa610ec8565b6040516116079190612a8d565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611681576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167890612cc5565b60405180910390fd5b61168d60008383611c83565b806035600082825461169f9190612da3565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116f59190612da3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161175a9190612ce5565b60405180910390a361176e60008383611cdb565b5050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060019054906101000a900460ff168061185e575060008054906101000a900460ff16155b61189d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189490612bc5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156118ed576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6118f5611f2d565b6118ff8383612006565b80156119205760008060016101000a81548160ff0219169083151502179055505b505050565b600060019054906101000a900460ff168061194b575060008054906101000a900460ff16155b61198a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198190612bc5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156119da576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6119e2611f2d565b6119ea61210f565b8015611a0b5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611a34575060008054906101000a900460ff16155b611a73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6a90612bc5565b60405180910390fd5b60008060019054906101000a900460ff161590508015611ac3576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611acb611f2d565b611ad3612203565b8015611af45760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611b1d575060008054906101000a900460ff16155b611b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5390612bc5565b60405180910390fd5b60008060019054906101000a900460ff161590508015611bac576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611bb46122ec565b611bbc6123c5565b8015611bdd5760008060016101000a81548160ff0219169083151502179055505b50565b611be8610886565b15611c28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1f90612ba5565b60405180910390fd5b6001606560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611c6c610ec8565b604051611c799190612a8d565b60405180910390a1565b611c8b610886565b15611ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc290612ba5565b60405180910390fd5b611cd683838361249e565b505050565b505050565b6000611d0e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6124a3565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611d40816124ad565b611d7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7690612be5565b60405180910390fd5b80611dac7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6124a3565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060611dfb836124ad565b611e3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3190612c45565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611e629190612a76565b600060405180830381855af49150503d8060008114611e9d576040519150601f19603f3d011682016040523d82523d6000602084013e611ea2565b606091505b5091509150611eca82826040518060600160405280602781526020016135f0602791396124c0565b9250505092915050565b6000819050919050565b611ee781611d37565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600060019054906101000a900460ff1680611f53575060008054906101000a900460ff16155b611f92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f8990612bc5565b60405180910390fd5b60008060019054906101000a900460ff161590508015611fe2576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156120035760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff168061202c575060008054906101000a900460ff16155b61206b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206290612bc5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156120bb576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b82603690805190602001906120d1929190612527565b5081603790805190602001906120e8929190612527565b50801561210a5760008060016101000a81548160ff0219169083151502179055505b505050565b600060019054906101000a900460ff1680612135575060008054906101000a900460ff16155b612174576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161216b90612bc5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156121c4576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000606560006101000a81548160ff02191690831515021790555080156122005760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680612229575060008054906101000a900460ff16155b612268576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161225f90612bc5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156122b8576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6122c86122c3610ec8565b611772565b80156122e95760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680612312575060008054906101000a900460ff16155b612351576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161234890612bc5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156123a1576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156123c25760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806123eb575060008054906101000a900460ff16155b61242a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161242190612bc5565b60405180910390fd5b60008060019054906101000a900460ff16159050801561247a576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b801561249b5760008060016101000a81548160ff0219169083151502179055505b50565b505050565b6000819050919050565b600080823b905060008111915050919050565b606083156124d057829050612520565b6000835111156124e35782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125179190612ac3565b60405180910390fd5b9392505050565b8280546125339061305b565b90600052602060002090601f016020900481019282612555576000855561259c565b82601f1061256e57805160ff191683800117855561259c565b8280016001018555821561259c579182015b8281111561259b578251825591602001919060010190612580565b5b5090506125a991906125ad565b5090565b5b808211156125c65760008160009055506001016125ae565b5090565b60006125dd6125d884612d40565b612d1b565b9050828152602081018484840111156125f557600080fd5b612600848285613019565b509392505050565b600081359050612617816135c1565b92915050565b600082601f83011261262e57600080fd5b813561263e8482602086016125ca565b91505092915050565b600081359050612656816135d8565b92915050565b60006020828403121561266e57600080fd5b600061267c84828501612608565b91505092915050565b6000806040838503121561269857600080fd5b60006126a685828601612608565b92505060206126b785828601612608565b9150509250929050565b6000806000606084860312156126d657600080fd5b60006126e486828701612608565b93505060206126f586828701612608565b925050604061270686828701612647565b9150509250925092565b6000806040838503121561272357600080fd5b600061273185828601612608565b925050602083013567ffffffffffffffff81111561274e57600080fd5b61275a8582860161261d565b9150509250929050565b6000806040838503121561277757600080fd5b600061278585828601612608565b925050602061279685828601612647565b9150509250929050565b6127a981612fc4565b82525050565b6127b881612fd6565b82525050565b60006127c982612d71565b6127d38185612d87565b93506127e3818560208601613028565b80840191505092915050565b60006127fa82612d7c565b6128048185612d92565b9350612814818560208601613028565b61281d8161314b565b840191505092915050565b6000612835602383612d92565b915061284082613169565b604082019050919050565b6000612858601483612d92565b9150612863826131b8565b602082019050919050565b600061287b602f83612d92565b9150612886826131e1565b604082019050919050565b600061289e602683612d92565b91506128a982613230565b604082019050919050565b60006128c1602283612d92565b91506128cc8261327f565b604082019050919050565b60006128e4602683612d92565b91506128ef826132ce565b604082019050919050565b6000612907601083612d92565b91506129128261331d565b602082019050919050565b600061292a602e83612d92565b915061293582613346565b604082019050919050565b600061294d602d83612d92565b915061295882613395565b604082019050919050565b6000612970602883612d92565b915061297b826133e4565b604082019050919050565b6000612993602083612d92565b915061299e82613433565b602082019050919050565b60006129b6602683612d92565b91506129c18261345c565b604082019050919050565b60006129d9602583612d92565b91506129e4826134ab565b604082019050919050565b60006129fc602483612d92565b9150612a07826134fa565b604082019050919050565b6000612a1f602583612d92565b9150612a2a82613549565b604082019050919050565b6000612a42601f83612d92565b9150612a4d82613598565b602082019050919050565b612a6181613002565b82525050565b612a708161300c565b82525050565b6000612a8282846127be565b915081905092915050565b6000602082019050612aa260008301846127a0565b92915050565b6000602082019050612abd60008301846127af565b92915050565b60006020820190508181036000830152612add81846127ef565b905092915050565b60006020820190508181036000830152612afe81612828565b9050919050565b60006020820190508181036000830152612b1e8161284b565b9050919050565b60006020820190508181036000830152612b3e8161286e565b9050919050565b60006020820190508181036000830152612b5e81612891565b9050919050565b60006020820190508181036000830152612b7e816128b4565b9050919050565b60006020820190508181036000830152612b9e816128d7565b9050919050565b60006020820190508181036000830152612bbe816128fa565b9050919050565b60006020820190508181036000830152612bde8161291d565b9050919050565b60006020820190508181036000830152612bfe81612940565b9050919050565b60006020820190508181036000830152612c1e81612963565b9050919050565b60006020820190508181036000830152612c3e81612986565b9050919050565b60006020820190508181036000830152612c5e816129a9565b9050919050565b60006020820190508181036000830152612c7e816129cc565b9050919050565b60006020820190508181036000830152612c9e816129ef565b9050919050565b60006020820190508181036000830152612cbe81612a12565b9050919050565b60006020820190508181036000830152612cde81612a35565b9050919050565b6000602082019050612cfa6000830184612a58565b92915050565b6000602082019050612d156000830184612a67565b92915050565b6000612d25612d36565b9050612d31828261308d565b919050565b6000604051905090565b600067ffffffffffffffff821115612d5b57612d5a61311c565b5b612d648261314b565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000612dae82613002565b9150612db983613002565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612dee57612ded6130be565b5b828201905092915050565b6000808291508390505b6001851115612e4357808604811115612e1f57612e1e6130be565b5b6001851615612e2e5780820291505b8081029050612e3c8561315c565b9450612e03565b94509492505050565b6000612e5782613002565b9150612e628361300c565b9250612e8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612e97565b905092915050565b600082612ea75760019050612f63565b81612eb55760009050612f63565b8160018114612ecb5760028114612ed557612f04565b6001915050612f63565b60ff841115612ee757612ee66130be565b5b8360020a915084821115612efe57612efd6130be565b5b50612f63565b5060208310610133831016604e8410600b8410161715612f395782820a905083811115612f3457612f336130be565b5b612f63565b612f468484846001612df9565b92509050818404811115612f5d57612f5c6130be565b5b81810290505b9392505050565b6000612f7582613002565b9150612f8083613002565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612fb957612fb86130be565b5b828202905092915050565b6000612fcf82612fe2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b8381101561304657808201518184015260208101905061302b565b83811115613055576000848401525b50505050565b6000600282049050600182168061307357607f821691505b60208210811415613087576130866130ed565b5b50919050565b6130968261314b565b810181811067ffffffffffffffff821117156130b5576130b461311c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f45524331393637557067726164653a207570677261646520627265616b73206660008201527f7572746865722075706772616465730000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6135ca81612fc4565b81146135d557600080fd5b50565b6135e181613002565b81146135ec57600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201f0e3ff107819683267769edc7b89771847f2165f114f598251ab259424fa3c864736f6c63430008040033";

export class CoderToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoderToken> {
    return super.deploy(overrides || {}) as Promise<CoderToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoderToken {
    return super.attach(address) as CoderToken;
  }
  connect(signer: Signer): CoderToken__factory {
    return super.connect(signer) as CoderToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoderTokenInterface {
    return new utils.Interface(_abi) as CoderTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoderToken {
    return new Contract(address, _abi, signerOrProvider) as CoderToken;
  }
}
