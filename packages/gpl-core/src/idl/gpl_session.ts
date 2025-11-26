/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/gpl_session.json`.
 */
export type GplSession = {
  "address": "KeyspM2ssCJbqUhQ4k7sveSiY4WjnYsrXkC8oDbwde5",
  "metadata": {
    "name": "gplSession",
    "version": "2.0.8",
    "spec": "0.1.0",
    "description": "Gum Session Protocol (GPL Session)",
    "repository": "https://github.com/magicblock-labs/gum-program-library"
  },
  "instructions": [
    {
      "name": "createSession",
      "discriminator": [
        242,
        193,
        143,
        179,
        150,
        25,
        122,
        227
      ],
      "accounts": [
        {
          "name": "sessionToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  115,
                  115,
                  105,
                  111,
                  110,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "targetProgram"
              },
              {
                "kind": "account",
                "path": "sessionSigner"
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "sessionSigner",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "targetProgram",
          "docs": [
            "CHECK the target program is actually a program."
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "topUp",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "validUntil",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "lamports",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "createSessionV2",
      "discriminator": [
        223,
        233,
        108,
        7,
        65,
        194,
        235,
        38
      ],
      "accounts": [
        {
          "name": "sessionToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  115,
                  115,
                  105,
                  111,
                  110,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  118,
                  50
                ]
              },
              {
                "kind": "account",
                "path": "targetProgram"
              },
              {
                "kind": "account",
                "path": "sessionSigner"
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "sessionSigner",
          "writable": true,
          "signer": true
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "targetProgram",
          "docs": [
            "CHECK the target program is actually a program."
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "topUp",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "validUntil",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "lamports",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "createSessionWithPayer",
      "discriminator": [
        87,
        133,
        171,
        12,
        60,
        146,
        190,
        252
      ],
      "accounts": [
        {
          "name": "sessionToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  115,
                  115,
                  105,
                  111,
                  110,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "targetProgram"
              },
              {
                "kind": "account",
                "path": "sessionSigner"
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "sessionSigner",
          "writable": true,
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "targetProgram",
          "docs": [
            "CHECK the target program is actually a program."
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "topUp",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "validUntil",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "lamports",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "revokeSession",
      "discriminator": [
        86,
        92,
        198,
        120,
        144,
        2,
        7,
        194
      ],
      "accounts": [
        {
          "name": "sessionToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  115,
                  115,
                  105,
                  111,
                  110,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "session_token.target_program",
                "account": "sessionToken"
              },
              {
                "kind": "account",
                "path": "session_token.session_signer",
                "account": "sessionToken"
              },
              {
                "kind": "account",
                "path": "session_token.authority",
                "account": "sessionToken"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "relations": [
            "sessionToken"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "revokeSessionV2",
      "discriminator": [
        211,
        59,
        125,
        188,
        43,
        155,
        8,
        102
      ],
      "accounts": [
        {
          "name": "sessionToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  115,
                  115,
                  105,
                  111,
                  110,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  118,
                  50
                ]
              },
              {
                "kind": "account",
                "path": "session_token.target_program",
                "account": "sessionTokenV2"
              },
              {
                "kind": "account",
                "path": "session_token.session_signer",
                "account": "sessionTokenV2"
              },
              {
                "kind": "account",
                "path": "session_token.authority",
                "account": "sessionTokenV2"
              }
            ]
          }
        },
        {
          "name": "feePayer",
          "writable": true,
          "relations": [
            "sessionToken"
          ]
        },
        {
          "name": "authority",
          "relations": [
            "sessionToken"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sessionToken",
      "discriminator": [
        233,
        4,
        115,
        14,
        46,
        21,
        1,
        15
      ]
    },
    {
      "name": "sessionTokenV2",
      "discriminator": [
        178,
        3,
        85,
        254,
        13,
        116,
        128,
        41
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "validityTooLong",
      "msg": "Requested validity is too long"
    },
    {
      "code": 6001,
      "name": "invalidToken",
      "msg": "Invalid session token"
    },
    {
      "code": 6002,
      "name": "noToken",
      "msg": "No session token provided"
    },
    {
      "code": 6003,
      "name": "invalidAuthority",
      "msg": "Invalid authority"
    }
  ],
  "types": [
    {
      "name": "sessionToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "targetProgram",
            "type": "pubkey"
          },
          {
            "name": "sessionSigner",
            "type": "pubkey"
          },
          {
            "name": "validUntil",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "sessionTokenV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "targetProgram",
            "type": "pubkey"
          },
          {
            "name": "sessionSigner",
            "type": "pubkey"
          },
          {
            "name": "feePayer",
            "type": "pubkey"
          },
          {
            "name": "validUntil",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
