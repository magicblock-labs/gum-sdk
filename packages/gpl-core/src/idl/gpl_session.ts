/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/gpl_session.json`.
 */
export type GplSession = {
  "address": "KeyspM2ssCJbqUhQ4k7sveSiY4WjnYsrXkC8oDbwde5",
  "metadata": {
    "name": "SessionKeys",
    "version": "2.0.7",
    "spec": "0.1.0",
    "description": "Session Keys Protocol",
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
    }
  ]
};
