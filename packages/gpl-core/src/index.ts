import * as anchor from "@coral-xyz/anchor";
import { Wallet } from "@coral-xyz/anchor/dist/cjs/provider";
import { Cluster } from "@solana/web3.js";
import { GPLSESSION_PROGRAMS } from "./constants";
import { SessionTokenManager } from "./sessionTokenManager";

export {
  GPLSESSION_PROGRAMS,
  SessionTokenManager,
};

export class SDK {
  // @ts-ignore
  readonly provider: anchor.AnchorProvider;
  readonly rpcConnection: anchor.web3.Connection;

  constructor(
    wallet: Wallet,
    connection: anchor.web3.Connection,
    opts: anchor.web3.ConfirmOptions,
  ) {
    this.provider = new anchor.AnchorProvider(connection, wallet, opts);
    this.rpcConnection = connection;
  }

}
