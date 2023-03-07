(function() {var implementors = {
"pallet_babe":[["impl&lt;T, R, P, L&gt; <a class=\"trait\" href=\"sp_staking/offence/trait.OffenceReportSystem.html\" title=\"trait sp_staking::offence::OffenceReportSystem\">OffenceReportSystem</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;, (<a class=\"struct\" href=\"sp_consensus_slots/struct.EquivocationProof.html\" title=\"struct sp_consensus_slots::EquivocationProof\">EquivocationProof</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Header\" title=\"type frame_system::pallet::Config::Header\">Header</a>, Public&gt;, &lt;T as <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_babe/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_babe::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>)&gt; for <a class=\"struct\" href=\"pallet_babe/struct.EquivocationReportSystem.html\" title=\"struct pallet_babe::EquivocationReportSystem\">EquivocationReportSystem</a>&lt;T, R, P, L&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_authorship/pallet/trait.Config.html\" title=\"trait pallet_authorship::pallet::Config\">Config</a> + <a class=\"trait\" href=\"frame_system/offchain/trait.SendTransactionTypes.html\" title=\"trait frame_system::offchain::SendTransactionTypes\">SendTransactionTypes</a>&lt;<a class=\"enum\" href=\"pallet_babe/pallet/enum.Call.html\" title=\"enum pallet_babe::pallet::Call\">Call</a>&lt;T&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"sp_staking/offence/trait.ReportOffence.html\" title=\"trait sp_staking::offence::ReportOffence\">ReportOffence</a>&lt;T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, P::<a class=\"associatedtype\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html#associatedtype.IdentificationTuple\" title=\"type frame_support::traits::validation::KeyOwnerProofSystem::IdentificationTuple\">IdentificationTuple</a>, <a class=\"struct\" href=\"pallet_babe/struct.EquivocationOffence.html\" title=\"struct pallet_babe::EquivocationOffence\">EquivocationOffence</a>&lt;P::<a class=\"associatedtype\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html#associatedtype.IdentificationTuple\" title=\"type frame_support::traits::validation::KeyOwnerProofSystem::IdentificationTuple\">IdentificationTuple</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html\" title=\"trait frame_support::traits::validation::KeyOwnerProofSystem\">KeyOwnerProofSystem</a>&lt;(<a class=\"struct\" href=\"sp_core/crypto/struct.KeyTypeId.html\" title=\"struct sp_core::crypto::KeyTypeId\">KeyTypeId</a>, <a class=\"type\" href=\"pallet_babe/type.AuthorityId.html\" title=\"type pallet_babe::AuthorityId\">AuthorityId</a>), Proof = T::<a class=\"associatedtype\" href=\"pallet_babe/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_babe::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"associatedtype\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html#associatedtype.IdentificationTuple\" title=\"type frame_support::traits::validation::KeyOwnerProofSystem::IdentificationTuple\">IdentificationTuple</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;,</span>"]],
"pallet_grandpa":[["impl&lt;T, R, P, L&gt; <a class=\"trait\" href=\"sp_staking/offence/trait.OffenceReportSystem.html\" title=\"trait sp_staking::offence::OffenceReportSystem\">OffenceReportSystem</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;, (<a class=\"struct\" href=\"sp_consensus_grandpa/struct.EquivocationProof.html\" title=\"struct sp_consensus_grandpa::EquivocationProof\">EquivocationProof</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.Hash\" title=\"type frame_system::pallet::Config::Hash\">Hash</a>, &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.BlockNumber\" title=\"type frame_system::pallet::Config::BlockNumber\">BlockNumber</a>&gt;, &lt;T as <a class=\"trait\" href=\"pallet_grandpa/pallet/trait.Config.html\" title=\"trait pallet_grandpa::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_grandpa/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_grandpa::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>)&gt; for <a class=\"struct\" href=\"pallet_grandpa/struct.EquivocationReportSystem.html\" title=\"struct pallet_grandpa::EquivocationReportSystem\">EquivocationReportSystem</a>&lt;T, R, P, L&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_grandpa/pallet/trait.Config.html\" title=\"trait pallet_grandpa::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_authorship/pallet/trait.Config.html\" title=\"trait pallet_authorship::pallet::Config\">Config</a> + <a class=\"trait\" href=\"frame_system/offchain/trait.SendTransactionTypes.html\" title=\"trait frame_system::offchain::SendTransactionTypes\">SendTransactionTypes</a>&lt;<a class=\"enum\" href=\"pallet_grandpa/pallet/enum.Call.html\" title=\"enum pallet_grandpa::pallet::Call\">Call</a>&lt;T&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"sp_staking/offence/trait.ReportOffence.html\" title=\"trait sp_staking::offence::ReportOffence\">ReportOffence</a>&lt;T::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, P::<a class=\"associatedtype\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html#associatedtype.IdentificationTuple\" title=\"type frame_support::traits::validation::KeyOwnerProofSystem::IdentificationTuple\">IdentificationTuple</a>, <a class=\"struct\" href=\"pallet_grandpa/struct.EquivocationOffence.html\" title=\"struct pallet_grandpa::EquivocationOffence\">EquivocationOffence</a>&lt;P::<a class=\"associatedtype\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html#associatedtype.IdentificationTuple\" title=\"type frame_support::traits::validation::KeyOwnerProofSystem::IdentificationTuple\">IdentificationTuple</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html\" title=\"trait frame_support::traits::validation::KeyOwnerProofSystem\">KeyOwnerProofSystem</a>&lt;(<a class=\"struct\" href=\"sp_core/crypto/struct.KeyTypeId.html\" title=\"struct sp_core::crypto::KeyTypeId\">KeyTypeId</a>, <a class=\"type\" href=\"pallet_grandpa/type.AuthorityId.html\" title=\"type pallet_grandpa::AuthorityId\">AuthorityId</a>), Proof = T::<a class=\"associatedtype\" href=\"pallet_grandpa/pallet/trait.Config.html#associatedtype.KeyOwnerProof\" title=\"type pallet_grandpa::pallet::Config::KeyOwnerProof\">KeyOwnerProof</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"associatedtype\" href=\"frame_support/traits/validation/trait.KeyOwnerProofSystem.html#associatedtype.IdentificationTuple\" title=\"type frame_support::traits::validation::KeyOwnerProofSystem::IdentificationTuple\">IdentificationTuple</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;,</span>"]],
"sp_staking":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()