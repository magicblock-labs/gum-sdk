import * as anchor from "@coral-xyz/anchor";
import { Wallet } from "@coral-xyz/anchor/dist/cjs/provider";
import { PublicKey, Cluster } from "@solana/web3.js";
import { GplSession } from "./idl/gpl_session";
import gpl_session_idl from "./idl/gpl_session.json";

export class SessionTokenManager {
  // @ts-ignore
  readonly program: anchor.Program<GplSession>;
  readonly provider: anchor.AnchorProvider;

  constructor(
    wallet: Wallet,
    connection: anchor.web3.Connection,
  ) {
    this.provider = new anchor.AnchorProvider(connection, wallet, {
      preflightCommitment: "confirmed",
    });
    // @ts-ignore
    this.program = new anchor.Program(gpl_session_idl as unknown as GplSession, this.provider);
  }

  public async get(sessionAccount: PublicKey) {
    // @ts-ignore
    return this.program.account.sessionToken.fetch(sessionAccount);
  }
}
