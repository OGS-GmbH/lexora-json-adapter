/**
 * Identifies a locale
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Locale = string;

/**
 * Identifies a token
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Token = string;

/**
 * A `Record` that is indexable by a {@link Token} and contains the translation
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Translatables = Record<Token, unknown>;

/**
 * Identifies a scope
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Scope = string;

/**
 * A `Record` that is indexable by a {@link Scope} and contains {@link Translatables}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Scopes = Record<Scope, Translatables>;

/**
 * A `Record` that is indexable by a {@link Locale} and contains either {@link Scopes} or {@link Translatables}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type File = Record<Locale, Scopes | Translatables>;

export type { Locale, Token, Translatables, Scope, Scopes, File };
