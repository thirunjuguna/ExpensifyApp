import type {ValueOf} from 'type-fest';
import type CONST from '@src/CONST';
import type ONYXKEYS from '@src/ONYXKEYS';
import type CollectionDataSet from '@src/types/utils/CollectionDataSet';

/**
 * Names of violations.
 * Derived from `CONST.VIOLATIONS` to maintain a single source of truth.
 */
type ViolationName = ValueOf<typeof CONST.VIOLATIONS>;

/**
 * Types of violations.
 * Derived from `CONST.VIOLATION_TYPES` to maintain a single source of truth.
 */
type ViolationType = ValueOf<typeof CONST.VIOLATION_TYPES>;

/**
 * Types for the data in the modifiedAmount violation
 * Derived from CONST.VIOLATION_DATA_TYPES to maintain a single source of truth.
 */
type ViolationDataType = ValueOf<typeof CONST.MODIFIED_AMOUNT_VIOLATION_DATA>;

/** Model of transaction violation data */
type TransactionViolationData = {
    /** Who rejected the transaction */
    rejectedBy?: string;

    /** Why the transaction was rejected */
    rejectReason?: string;

    /** Limit that the transaction violated */
    formattedLimit?: string;

    /** Percentage amount of conversion surcharge applied to the transaction */
    surcharge?: number;

    /** Percentage amount of invoice markup applied to the transaction */
    invoiceMarkup?: number;

    /** Amount of days which the transaction date overpasses the date limit */
    maxAge?: number;

    /** Name of the tag that triggered this violation */
    tagName?: string;

    /** Name of the category that triggered this violation */
    category?: string;

    /** Whether the transaction failed due to a broken bank connection */
    brokenBankConnection?: boolean;

    /** Whether the workspace admin needs to resolve this violation */
    isAdmin?: boolean;

    /** Workspace admin email */
    email?: string;

    /** Whether the transaction is older than 7 days */
    isTransactionOlderThan7Days?: boolean;

    /** Workspace admin name */
    member?: string;

    /** Name of the tax that triggered this violation */
    taxName?: string;

    /** Index of the tag form field that triggered this violation */
    tagListIndex?: number;

    /** Name of the tag form field that triggered this violation */
    tagListName?: string;

    /** Collection of form fields that triggered this violation */
    errorIndexes?: number[];

    /** Whether the current violation is `pending RTER` */
    pendingPattern?: boolean;

    /** modifiedAmount violation type (eg, 'distance', 'card') */
    type?: ViolationDataType;

    /** Percent Variance for modified amount violations */
    displayPercentVariance?: number;

    /** List of duplicate transactions */
    duplicates?: string[];

    /** Type of the RTER violation */
    rterType?: ValueOf<typeof CONST.RTER_VIOLATION_TYPES>;

    /** A generic message to display to the user */
    message?: string;

    /** Backend-defined override for the violation's target field */
    field?: string;

    /** Message to display to the user */
    tooltip?: string;

    /** What prohibitive expense rule did they break? */
    prohibitedExpenseRule?: string;
};

/** Model of a transaction violation */
type TransactionViolation = {
    /** Type of transaction violation */
    type: ValueOf<typeof CONST.VIOLATION_TYPES>;

    /** Name of the transaction violation */
    name: ViolationName;

    /** Additional violation information to provide the user */
    data?: TransactionViolationData;

    /** Indicates if this violation should be shown in review */
    showInReview?: boolean;
};

/** Collection of transaction violations */
type TransactionViolations = TransactionViolation[];

/** Collection of mock transaction violations, indexed by transactionViolations_${transactionID} */
type TransactionViolationsCollectionDataSet = CollectionDataSet<typeof ONYXKEYS.COLLECTION.TRANSACTION_VIOLATIONS>;

export type {TransactionViolation, ViolationName, ViolationType, ViolationDataType, TransactionViolationsCollectionDataSet};
export default TransactionViolations;
