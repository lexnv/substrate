(function() {var implementors = {
"frame_benchmarking":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"frame_benchmarking/trait.Benchmark.html\" title=\"trait frame_benchmarking::Benchmark\">Benchmark</a>&lt;Block&gt;"]],
"frame_system_rpc_runtime_api":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, AccountId, Nonce&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"frame_system_rpc_runtime_api/trait.AccountNonceApi.html\" title=\"trait frame_system_rpc_runtime_api::AccountNonceApi\">AccountNonceApi</a>&lt;Block, AccountId, Nonce&gt;"]],
"frame_try_runtime":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"frame_try_runtime/trait.TryRuntime.html\" title=\"trait frame_try_runtime::TryRuntime\">TryRuntime</a>&lt;Block&gt;"]],
"kitchensink_runtime":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, AccountId, AssetBalance, AssetId&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"kitchensink_runtime/assets_api/trait.AssetsApi.html\" title=\"trait kitchensink_runtime::assets_api::AssetsApi\">AssetsApi</a>&lt;Block, AccountId, AssetBalance, AssetId&gt;"]],
"pallet_asset_conversion":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Balance, AssetBalance, AssetId&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_asset_conversion/trait.AssetConversionApi.html\" title=\"trait pallet_asset_conversion::AssetConversionApi\">AssetConversionApi</a>&lt;Block, Balance, AssetBalance, AssetId&gt;"]],
"pallet_beefy_mmr":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, H&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_beefy_mmr/trait.BeefyMmrApi.html\" title=\"trait pallet_beefy_mmr::BeefyMmrApi\">BeefyMmrApi</a>&lt;Block, H&gt;"]],
"pallet_contracts":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, AccountId, Balance, BlockNumber, Hash, EventRecord&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_contracts/trait.ContractsApi.html\" title=\"trait pallet_contracts::ContractsApi\">ContractsApi</a>&lt;Block, AccountId, Balance, BlockNumber, Hash, EventRecord&gt;"]],
"pallet_nfts_runtime_api":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, AccountId, CollectionId, ItemId&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_nfts_runtime_api/trait.NftsApi.html\" title=\"trait pallet_nfts_runtime_api::NftsApi\">NftsApi</a>&lt;Block, AccountId, CollectionId, ItemId&gt;"]],
"pallet_nomination_pools_runtime_api":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, AccountId, Balance&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_nomination_pools_runtime_api/trait.NominationPoolsApi.html\" title=\"trait pallet_nomination_pools_runtime_api::NominationPoolsApi\">NominationPoolsApi</a>&lt;Block, AccountId, Balance&gt;"]],
"pallet_staking_runtime_api":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Balance&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_staking_runtime_api/trait.StakingApi.html\" title=\"trait pallet_staking_runtime_api::StakingApi\">StakingApi</a>&lt;Block, Balance&gt;"]],
"pallet_transaction_payment_rpc_runtime_api":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Balance, Call&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_transaction_payment_rpc_runtime_api/trait.TransactionPaymentCallApi.html\" title=\"trait pallet_transaction_payment_rpc_runtime_api::TransactionPaymentCallApi\">TransactionPaymentCallApi</a>&lt;Block, Balance, Call&gt;"],["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Balance&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"pallet_transaction_payment_rpc_runtime_api/trait.TransactionPaymentApi.html\" title=\"trait pallet_transaction_payment_rpc_runtime_api::TransactionPaymentApi\">TransactionPaymentApi</a>&lt;Block, Balance&gt;"]],
"sp_api":[],
"sp_authority_discovery":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_authority_discovery/trait.AuthorityDiscoveryApi.html\" title=\"trait sp_authority_discovery::AuthorityDiscoveryApi\">AuthorityDiscoveryApi</a>&lt;Block&gt;"]],
"sp_block_builder":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_block_builder/trait.BlockBuilder.html\" title=\"trait sp_block_builder::BlockBuilder\">BlockBuilder</a>&lt;Block&gt;"]],
"sp_consensus_aura":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, AuthorityId: Codec&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_consensus_aura/trait.AuraApi.html\" title=\"trait sp_consensus_aura::AuraApi\">AuraApi</a>&lt;Block, AuthorityId&gt;"]],
"sp_consensus_babe":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_consensus_babe/trait.BabeApi.html\" title=\"trait sp_consensus_babe::BabeApi\">BabeApi</a>&lt;Block&gt;"]],
"sp_consensus_beefy":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_consensus_beefy/trait.BeefyApi.html\" title=\"trait sp_consensus_beefy::BeefyApi\">BeefyApi</a>&lt;Block&gt;"]],
"sp_consensus_grandpa":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_consensus_grandpa/trait.GrandpaApi.html\" title=\"trait sp_consensus_grandpa::GrandpaApi\">GrandpaApi</a>&lt;Block&gt;"]],
"sp_consensus_pow":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Difficulty: Decode&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_consensus_pow/trait.DifficultyApi.html\" title=\"trait sp_consensus_pow::DifficultyApi\">DifficultyApi</a>&lt;Block, Difficulty&gt;"],["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Moment: Decode&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_consensus_pow/trait.TimestampApi.html\" title=\"trait sp_consensus_pow::TimestampApi\">TimestampApi</a>&lt;Block, Moment&gt;"]],
"sp_genesis_builder":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_genesis_builder/trait.GenesisBuilder.html\" title=\"trait sp_genesis_builder::GenesisBuilder\">GenesisBuilder</a>&lt;Block&gt;"]],
"sp_mmr_primitives":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Hash: Codec, BlockNumber: Codec&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_mmr_primitives/trait.MmrApi.html\" title=\"trait sp_mmr_primitives::MmrApi\">MmrApi</a>&lt;Block, Hash, BlockNumber&gt;"]],
"sp_offchain":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_offchain/trait.OffchainWorkerApi.html\" title=\"trait sp_offchain::OffchainWorkerApi\">OffchainWorkerApi</a>&lt;Block&gt;"]],
"sp_session":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_session/trait.SessionKeys.html\" title=\"trait sp_session::SessionKeys\">SessionKeys</a>&lt;Block&gt;"]],
"sp_statement_store":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_statement_store/runtime_api/trait.ValidateStatement.html\" title=\"trait sp_statement_store::runtime_api::ValidateStatement\">ValidateStatement</a>&lt;Block&gt;"]],
"sp_transaction_pool":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"sp_transaction_pool/runtime_api/trait.TaggedTransactionQueue.html\" title=\"trait sp_transaction_pool::runtime_api::TaggedTransactionQueue\">TaggedTransactionQueue</a>&lt;Block&gt;"]],
"substrate_test_runtime":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_api/trait.RuntimeApiInfo.html\" title=\"trait sp_api::RuntimeApiInfo\">RuntimeApiInfo</a> for dyn <a class=\"trait\" href=\"substrate_test_runtime/trait.TestAPI.html\" title=\"trait substrate_test_runtime::TestAPI\">TestAPI</a>&lt;Block&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()