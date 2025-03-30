import { useMemo } from 'react';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { SDK } from '@magicblock-labs/gum-sdk';
import { Connection, ConfirmOptions, Cluster } from '@solana/web3.js';

const useGum = (
  wallet: AnchorWallet,
  connection: Connection,
  opts: ConfirmOptions,
) => {
  const sdk = useMemo(() => {
    return new SDK(wallet, connection, opts);
  }, [wallet]);

  return sdk;
};

export { useGum };
