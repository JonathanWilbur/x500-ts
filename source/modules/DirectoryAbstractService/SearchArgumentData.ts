import Name from "../InformationFramework/Name";
import Filter from "./Filter";
import EntryInformationSelection from "./EntryInformationSelection";
import PagedResultsRequest from "./PagedResultsRequest";
import RelaxationPolicy from "../ServiceAdministration/RelaxationPolicy";
import HierarchySelections from "./HierarchySelections";
import SearchControlOptions from "./SearchControlOptions";
import JoinArgument from "./JoinArgument";
import CommonArguments from "./CommonArguments";

/**
 * `SearchArgumentData ::= SET {
 *   baseObject            [0]  Name,
 *   subset                [1]  INTEGER {
 *     baseObject    (0),
 *     oneLevel      (1),
 *     wholeSubtree  (2)} DEFAULT baseObject,
 *   filter                [2]  Filter DEFAULT and:{},
 *   searchAliases         [3]  BOOLEAN DEFAULT TRUE,
 *   selection             [4]  EntryInformationSelection DEFAULT {},
 *   pagedResults          [5]  PagedResultsRequest OPTIONAL,
 *   matchedValuesOnly     [6]  BOOLEAN DEFAULT FALSE,
 *   extendedFilter        [7]  Filter OPTIONAL,
 *   checkOverspecified    [8]  BOOLEAN DEFAULT FALSE,
 *   relaxation            [9]  RelaxationPolicy OPTIONAL,
 *   extendedArea          [10] INTEGER OPTIONAL,
 *   hierarchySelections   [11] HierarchySelections DEFAULT {self},
 *   searchControlOptions  [12] SearchControlOptions DEFAULT {searchAliases},
 *   joinArguments         [13] SEQUENCE SIZE (1..MAX) OF JoinArgument OPTIONAL,
 *   joinType              [14] ENUMERATED {
 *     innerJoin      (0),
 *     leftOuterJoin  (1),
 *     fullOuterJoin  (2)} DEFAULT leftOuterJoin,
 *   ...,
 *   ...,
 *   COMPONENTS OF              CommonArguments }`
 */
export default
class SearchArgumentData {
    constructor (
        readonly baseObject: Name,
        readonly subset: number,
        readonly filter: Filter,
        readonly searchAliases: boolean,
        readonly selection: EntryInformationSelection,
        readonly pagedResults: PagedResultsRequest | undefined,
        readonly matchedValuesOnly: boolean,
        readonly extendedFilter: Filter | undefined,
        readonly checkOverspecified: boolean,
        readonly relaxation: RelaxationPolicy | undefined,
        readonly extendedArea: number | undefined,
        readonly hierarchySelections: HierarchySelections,
        readonly searchControlOptions: SearchControlOptions,
        readonly joinArguments: JoinArgument[] | undefined,
        readonly joinType: number,
        readonly commonArguments: CommonArguments,
    ) {}
}
