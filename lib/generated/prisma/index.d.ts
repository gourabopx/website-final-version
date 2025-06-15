
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model SubCategoryImage
 * 
 */
export type SubCategoryImage = $Result.DefaultSelection<Prisma.$SubCategoryImagePayload>
/**
 * Model ProductColor
 * 
 */
export type ProductColor = $Result.DefaultSelection<Prisma.$ProductColorPayload>
/**
 * Model ProductBenefit
 * 
 */
export type ProductBenefit = $Result.DefaultSelection<Prisma.$ProductBenefitPayload>
/**
 * Model ProductIngredient
 * 
 */
export type ProductIngredient = $Result.DefaultSelection<Prisma.$ProductIngredientPayload>
/**
 * Model ProductSize
 * 
 */
export type ProductSize = $Result.DefaultSelection<Prisma.$ProductSizePayload>
/**
 * Model CartProduct
 * 
 */
export type CartProduct = $Result.DefaultSelection<Prisma.$CartProductPayload>
/**
 * Model OrderProduct
 * 
 */
export type OrderProduct = $Result.DefaultSelection<Prisma.$OrderProductPayload>
/**
 * Model ShippingAddress
 * 
 */
export type ShippingAddress = $Result.DefaultSelection<Prisma.$ShippingAddressPayload>
/**
 * Model PaymentResult
 * 
 */
export type PaymentResult = $Result.DefaultSelection<Prisma.$PaymentResultPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model TopBarButton
 * 
 */
export type TopBarButton = $Result.DefaultSelection<Prisma.$TopBarButtonPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ProductReview
 * 
 */
export type ProductReview = $Result.DefaultSelection<Prisma.$ProductReviewPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model ProductSubCategory
 * 
 */
export type ProductSubCategory = $Result.DefaultSelection<Prisma.$ProductSubCategoryPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model HomeScreenOffer
 * 
 */
export type HomeScreenOffer = $Result.DefaultSelection<Prisma.$HomeScreenOfferPayload>
/**
 * Model TopBar
 * 
 */
export type TopBar = $Result.DefaultSelection<Prisma.$TopBarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OfferType: {
  specialCombo: 'specialCombo',
  crazyDeal: 'crazyDeal'
};

export type OfferType = (typeof OfferType)[keyof typeof OfferType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OfferType = $Enums.OfferType

export const OfferType: typeof $Enums.OfferType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productReview`: Exposes CRUD operations for the **ProductReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductReviews
    * const productReviews = await prisma.productReview.findMany()
    * ```
    */
  get productReview(): Prisma.ProductReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSubCategory`: Exposes CRUD operations for the **ProductSubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSubCategories
    * const productSubCategories = await prisma.productSubCategory.findMany()
    * ```
    */
  get productSubCategory(): Prisma.ProductSubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeScreenOffer`: Exposes CRUD operations for the **HomeScreenOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeScreenOffers
    * const homeScreenOffers = await prisma.homeScreenOffer.findMany()
    * ```
    */
  get homeScreenOffer(): Prisma.HomeScreenOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topBar`: Exposes CRUD operations for the **TopBar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopBars
    * const topBars = await prisma.topBar.findMany()
    * ```
    */
  get topBar(): Prisma.TopBarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Review: 'Review',
    ProductReview: 'ProductReview',
    Category: 'Category',
    SubCategory: 'SubCategory',
    ProductSubCategory: 'ProductSubCategory',
    Cart: 'Cart',
    Order: 'Order',
    Coupon: 'Coupon',
    HomeScreenOffer: 'HomeScreenOffer',
    TopBar: 'TopBar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "review" | "productReview" | "category" | "subCategory" | "productSubCategory" | "cart" | "order" | "coupon" | "homeScreenOffer" | "topBar"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ProductReview: {
        payload: Prisma.$ProductReviewPayload<ExtArgs>
        fields: Prisma.ProductReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          findFirst: {
            args: Prisma.ProductReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          findMany: {
            args: Prisma.ProductReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>[]
          }
          create: {
            args: Prisma.ProductReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          createMany: {
            args: Prisma.ProductReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          update: {
            args: Prisma.ProductReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          deleteMany: {
            args: Prisma.ProductReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          aggregate: {
            args: Prisma.ProductReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductReview>
          }
          groupBy: {
            args: Prisma.ProductReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductSubCategory: {
        payload: Prisma.$ProductSubCategoryPayload<ExtArgs>
        fields: Prisma.ProductSubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductSubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductSubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductSubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductSubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductSubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>
          }
          update: {
            args: Prisma.ProductSubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductSubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductSubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSubCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductSubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSubCategory>
          }
          groupBy: {
            args: Prisma.ProductSubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSubCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductSubCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductSubCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductSubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CartFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CartAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrderFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrderAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CouponFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CouponAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      HomeScreenOffer: {
        payload: Prisma.$HomeScreenOfferPayload<ExtArgs>
        fields: Prisma.HomeScreenOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeScreenOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeScreenOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>
          }
          findFirst: {
            args: Prisma.HomeScreenOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeScreenOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>
          }
          findMany: {
            args: Prisma.HomeScreenOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>[]
          }
          create: {
            args: Prisma.HomeScreenOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>
          }
          createMany: {
            args: Prisma.HomeScreenOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HomeScreenOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>
          }
          update: {
            args: Prisma.HomeScreenOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>
          }
          deleteMany: {
            args: Prisma.HomeScreenOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeScreenOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HomeScreenOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeScreenOfferPayload>
          }
          aggregate: {
            args: Prisma.HomeScreenOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeScreenOffer>
          }
          groupBy: {
            args: Prisma.HomeScreenOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeScreenOfferGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HomeScreenOfferFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HomeScreenOfferAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HomeScreenOfferCountArgs<ExtArgs>
            result: $Utils.Optional<HomeScreenOfferCountAggregateOutputType> | number
          }
        }
      }
      TopBar: {
        payload: Prisma.$TopBarPayload<ExtArgs>
        fields: Prisma.TopBarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopBarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopBarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>
          }
          findFirst: {
            args: Prisma.TopBarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopBarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>
          }
          findMany: {
            args: Prisma.TopBarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>[]
          }
          create: {
            args: Prisma.TopBarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>
          }
          createMany: {
            args: Prisma.TopBarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopBarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>
          }
          update: {
            args: Prisma.TopBarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>
          }
          deleteMany: {
            args: Prisma.TopBarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopBarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopBarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBarPayload>
          }
          aggregate: {
            args: Prisma.TopBarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopBar>
          }
          groupBy: {
            args: Prisma.TopBarGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopBarGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TopBarFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TopBarAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TopBarCountArgs<ExtArgs>
            result: $Utils.Optional<TopBarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    review?: ReviewOmit
    productReview?: ProductReviewOmit
    category?: CategoryOmit
    subCategory?: SubCategoryOmit
    productSubCategory?: ProductSubCategoryOmit
    cart?: CartOmit
    order?: OrderOmit
    coupon?: CouponOmit
    homeScreenOffer?: HomeScreenOfferOmit
    topBar?: TopBarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productSubCategories: number
    productReviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSubCategories?: boolean | ProductCountOutputTypeCountProductSubCategoriesArgs
    productReviews?: boolean | ProductCountOutputTypeCountProductReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSubCategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    productReviews: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productReviews?: boolean | ReviewCountOutputTypeCountProductReviewsArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountProductReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }


  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    productSubCategories: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSubCategories?: boolean | SubCategoryCountOutputTypeCountProductSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountProductSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSubCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Image
   */





  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url?: boolean
    public_id?: boolean
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    url?: boolean
    public_id?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"url" | "public_id", ExtArgs["result"]["image"]>

  export type $ImagePayload = {
    name: "Image"
    objects: {}
    scalars: {
      url: string | null
      public_id: string | null
    }
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>





  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly url: FieldRef<"Image", 'String'>
    readonly public_id: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
  }


  /**
   * Model SubCategoryImage
   */





  export type SubCategoryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url?: boolean
    public_url?: boolean
  }, ExtArgs["result"]["subCategoryImage"]>



  export type SubCategoryImageSelectScalar = {
    url?: boolean
    public_url?: boolean
  }

  export type SubCategoryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"url" | "public_url", ExtArgs["result"]["subCategoryImage"]>

  export type $SubCategoryImagePayload = {
    name: "SubCategoryImage"
    objects: {}
    scalars: {
      url: string | null
      public_url: string | null
    }
    composites: {}
  }

  type SubCategoryImageGetPayload<S extends boolean | null | undefined | SubCategoryImageDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryImagePayload, S>





  /**
   * Fields of the SubCategoryImage model
   */
  interface SubCategoryImageFieldRefs {
    readonly url: FieldRef<"SubCategoryImage", 'String'>
    readonly public_url: FieldRef<"SubCategoryImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubCategoryImage without action
   */
  export type SubCategoryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryImage
     */
    select?: SubCategoryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategoryImage
     */
    omit?: SubCategoryImageOmit<ExtArgs> | null
  }


  /**
   * Model ProductColor
   */





  export type ProductColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    color?: boolean
    image?: boolean
  }, ExtArgs["result"]["productColor"]>



  export type ProductColorSelectScalar = {
    color?: boolean
    image?: boolean
  }

  export type ProductColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"color" | "image", ExtArgs["result"]["productColor"]>

  export type $ProductColorPayload = {
    name: "ProductColor"
    objects: {}
    scalars: {
      color: string | null
      image: string | null
    }
    composites: {}
  }

  type ProductColorGetPayload<S extends boolean | null | undefined | ProductColorDefaultArgs> = $Result.GetResult<Prisma.$ProductColorPayload, S>





  /**
   * Fields of the ProductColor model
   */
  interface ProductColorFieldRefs {
    readonly color: FieldRef<"ProductColor", 'String'>
    readonly image: FieldRef<"ProductColor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductColor without action
   */
  export type ProductColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductColor
     */
    select?: ProductColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductColor
     */
    omit?: ProductColorOmit<ExtArgs> | null
  }


  /**
   * Model ProductBenefit
   */





  export type ProductBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["productBenefit"]>



  export type ProductBenefitSelectScalar = {
    name?: boolean
  }

  export type ProductBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["productBenefit"]>

  export type $ProductBenefitPayload = {
    name: "ProductBenefit"
    objects: {}
    scalars: {
      name: string
    }
    composites: {}
  }

  type ProductBenefitGetPayload<S extends boolean | null | undefined | ProductBenefitDefaultArgs> = $Result.GetResult<Prisma.$ProductBenefitPayload, S>





  /**
   * Fields of the ProductBenefit model
   */
  interface ProductBenefitFieldRefs {
    readonly name: FieldRef<"ProductBenefit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductBenefit without action
   */
  export type ProductBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductBenefit
     */
    select?: ProductBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductBenefit
     */
    omit?: ProductBenefitOmit<ExtArgs> | null
  }


  /**
   * Model ProductIngredient
   */





  export type ProductIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["productIngredient"]>



  export type ProductIngredientSelectScalar = {
    name?: boolean
  }

  export type ProductIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["productIngredient"]>

  export type $ProductIngredientPayload = {
    name: "ProductIngredient"
    objects: {}
    scalars: {
      name: string
    }
    composites: {}
  }

  type ProductIngredientGetPayload<S extends boolean | null | undefined | ProductIngredientDefaultArgs> = $Result.GetResult<Prisma.$ProductIngredientPayload, S>





  /**
   * Fields of the ProductIngredient model
   */
  interface ProductIngredientFieldRefs {
    readonly name: FieldRef<"ProductIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductIngredient without action
   */
  export type ProductIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductIngredient
     */
    select?: ProductIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductIngredient
     */
    omit?: ProductIngredientOmit<ExtArgs> | null
  }


  /**
   * Model ProductSize
   */





  export type ProductSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    size?: boolean
    qty?: boolean
    price?: boolean
    sold?: boolean
  }, ExtArgs["result"]["productSize"]>



  export type ProductSizeSelectScalar = {
    size?: boolean
    qty?: boolean
    price?: boolean
    sold?: boolean
  }

  export type ProductSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"size" | "qty" | "price" | "sold", ExtArgs["result"]["productSize"]>

  export type $ProductSizePayload = {
    name: "ProductSize"
    objects: {}
    scalars: {
      size: string
      qty: number
      price: number
      sold: number
    }
    composites: {}
  }

  type ProductSizeGetPayload<S extends boolean | null | undefined | ProductSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductSizePayload, S>





  /**
   * Fields of the ProductSize model
   */
  interface ProductSizeFieldRefs {
    readonly size: FieldRef<"ProductSize", 'String'>
    readonly qty: FieldRef<"ProductSize", 'Int'>
    readonly price: FieldRef<"ProductSize", 'Float'>
    readonly sold: FieldRef<"ProductSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductSize without action
   */
  export type ProductSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
  }


  /**
   * Model CartProduct
   */





  export type CartProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    vendor?: boolean
    image?: boolean
    size?: boolean
    qty?: boolean
    color?: boolean | ProductColorDefaultArgs<ExtArgs>
    price?: boolean
  }, ExtArgs["result"]["cartProduct"]>



  export type CartProductSelectScalar = {
    productId?: boolean
    name?: boolean
    vendor?: boolean
    image?: boolean
    size?: boolean
    qty?: boolean
    price?: boolean
  }

  export type CartProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "name" | "vendor" | "image" | "size" | "qty" | "color" | "price", ExtArgs["result"]["cartProduct"]>
  export type CartProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CartProductPayload = {
    name: "CartProduct"
    objects: {}
    scalars: {
      productId: string
      name: string | null
      vendor: Prisma.JsonValue | null
      image: string | null
      size: string | null
      qty: string | null
      price: number | null
    }
    composites: {
      color: Prisma.$ProductColorPayload | null
    }
  }

  type CartProductGetPayload<S extends boolean | null | undefined | CartProductDefaultArgs> = $Result.GetResult<Prisma.$CartProductPayload, S>





  /**
   * Fields of the CartProduct model
   */
  interface CartProductFieldRefs {
    readonly productId: FieldRef<"CartProduct", 'String'>
    readonly name: FieldRef<"CartProduct", 'String'>
    readonly vendor: FieldRef<"CartProduct", 'Json'>
    readonly image: FieldRef<"CartProduct", 'String'>
    readonly size: FieldRef<"CartProduct", 'String'>
    readonly qty: FieldRef<"CartProduct", 'String'>
    readonly price: FieldRef<"CartProduct", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CartProduct without action
   */
  export type CartProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartProduct
     */
    omit?: CartProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartProductInclude<ExtArgs> | null
  }


  /**
   * Model OrderProduct
   */





  export type OrderProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    image?: boolean
    size?: boolean
    qty?: boolean
    price?: boolean
    productCompletedAt?: boolean
  }, ExtArgs["result"]["orderProduct"]>



  export type OrderProductSelectScalar = {
    productId?: boolean
    name?: boolean
    image?: boolean
    size?: boolean
    qty?: boolean
    price?: boolean
    productCompletedAt?: boolean
  }

  export type OrderProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "name" | "image" | "size" | "qty" | "price" | "productCompletedAt", ExtArgs["result"]["orderProduct"]>

  export type $OrderProductPayload = {
    name: "OrderProduct"
    objects: {}
    scalars: {
      productId: string
      name: string | null
      image: string | null
      size: string | null
      qty: number | null
      price: number | null
      productCompletedAt: Date | null
    }
    composites: {}
  }

  type OrderProductGetPayload<S extends boolean | null | undefined | OrderProductDefaultArgs> = $Result.GetResult<Prisma.$OrderProductPayload, S>





  /**
   * Fields of the OrderProduct model
   */
  interface OrderProductFieldRefs {
    readonly productId: FieldRef<"OrderProduct", 'String'>
    readonly name: FieldRef<"OrderProduct", 'String'>
    readonly image: FieldRef<"OrderProduct", 'String'>
    readonly size: FieldRef<"OrderProduct", 'String'>
    readonly qty: FieldRef<"OrderProduct", 'Int'>
    readonly price: FieldRef<"OrderProduct", 'Float'>
    readonly productCompletedAt: FieldRef<"OrderProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderProduct without action
   */
  export type OrderProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
  }


  /**
   * Model ShippingAddress
   */





  export type ShippingAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
  }, ExtArgs["result"]["shippingAddress"]>



  export type ShippingAddressSelectScalar = {
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
  }

  export type ShippingAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"firstName" | "lastName" | "phoneNumber" | "address1" | "address2" | "city" | "state" | "zipCode" | "country", ExtArgs["result"]["shippingAddress"]>

  export type $ShippingAddressPayload = {
    name: "ShippingAddress"
    objects: {}
    scalars: {
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      address1: string | null
      address2: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
    }
    composites: {}
  }

  type ShippingAddressGetPayload<S extends boolean | null | undefined | ShippingAddressDefaultArgs> = $Result.GetResult<Prisma.$ShippingAddressPayload, S>





  /**
   * Fields of the ShippingAddress model
   */
  interface ShippingAddressFieldRefs {
    readonly firstName: FieldRef<"ShippingAddress", 'String'>
    readonly lastName: FieldRef<"ShippingAddress", 'String'>
    readonly phoneNumber: FieldRef<"ShippingAddress", 'String'>
    readonly address1: FieldRef<"ShippingAddress", 'String'>
    readonly address2: FieldRef<"ShippingAddress", 'String'>
    readonly city: FieldRef<"ShippingAddress", 'String'>
    readonly state: FieldRef<"ShippingAddress", 'String'>
    readonly zipCode: FieldRef<"ShippingAddress", 'String'>
    readonly country: FieldRef<"ShippingAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShippingAddress without action
   */
  export type ShippingAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingAddress
     */
    select?: ShippingAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingAddress
     */
    omit?: ShippingAddressOmit<ExtArgs> | null
  }


  /**
   * Model PaymentResult
   */





  export type PaymentResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    email?: boolean
  }, ExtArgs["result"]["paymentResult"]>



  export type PaymentResultSelectScalar = {
    id?: boolean
    status?: boolean
    email?: boolean
  }

  export type PaymentResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "email", ExtArgs["result"]["paymentResult"]>

  export type $PaymentResultPayload = {
    name: "PaymentResult"
    objects: {}
    scalars: {
      id: string | null
      status: string | null
      email: string | null
    }
    composites: {}
  }

  type PaymentResultGetPayload<S extends boolean | null | undefined | PaymentResultDefaultArgs> = $Result.GetResult<Prisma.$PaymentResultPayload, S>





  /**
   * Fields of the PaymentResult model
   */
  interface PaymentResultFieldRefs {
    readonly id: FieldRef<"PaymentResult", 'String'>
    readonly status: FieldRef<"PaymentResult", 'String'>
    readonly email: FieldRef<"PaymentResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentResult without action
   */
  export type PaymentResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentResult
     */
    select?: PaymentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentResult
     */
    omit?: PaymentResultOmit<ExtArgs> | null
  }


  /**
   * Model Address
   */





  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    active?: boolean
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    active?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"firstName" | "lastName" | "phoneNumber" | "address1" | "address2" | "city" | "state" | "zipCode" | "country" | "active", ExtArgs["result"]["address"]>

  export type $AddressPayload = {
    name: "Address"
    objects: {}
    scalars: {
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      address1: string | null
      address2: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
      active: boolean
    }
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>





  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly firstName: FieldRef<"Address", 'String'>
    readonly lastName: FieldRef<"Address", 'String'>
    readonly phoneNumber: FieldRef<"Address", 'String'>
    readonly address1: FieldRef<"Address", 'String'>
    readonly address2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly active: FieldRef<"Address", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
  }


  /**
   * Model TopBarButton
   */





  export type TopBarButtonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    text?: boolean
    link?: boolean
    textColor?: boolean
    backgroundColor?: boolean
  }, ExtArgs["result"]["topBarButton"]>



  export type TopBarButtonSelectScalar = {
    text?: boolean
    link?: boolean
    textColor?: boolean
    backgroundColor?: boolean
  }

  export type TopBarButtonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"text" | "link" | "textColor" | "backgroundColor", ExtArgs["result"]["topBarButton"]>

  export type $TopBarButtonPayload = {
    name: "TopBarButton"
    objects: {}
    scalars: {
      text: string | null
      link: string | null
      textColor: string
      backgroundColor: string
    }
    composites: {}
  }

  type TopBarButtonGetPayload<S extends boolean | null | undefined | TopBarButtonDefaultArgs> = $Result.GetResult<Prisma.$TopBarButtonPayload, S>





  /**
   * Fields of the TopBarButton model
   */
  interface TopBarButtonFieldRefs {
    readonly text: FieldRef<"TopBarButton", 'String'>
    readonly link: FieldRef<"TopBarButton", 'String'>
    readonly textColor: FieldRef<"TopBarButton", 'String'>
    readonly backgroundColor: FieldRef<"TopBarButton", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TopBarButton without action
   */
  export type TopBarButtonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBarButton
     */
    select?: TopBarButtonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBarButton
     */
    omit?: TopBarButtonOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    role: $Enums.Role | null
    defaultPaymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    role: $Enums.Role | null
    defaultPaymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    role: number
    defaultPaymentMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    role?: true
    defaultPaymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    role?: true
    defaultPaymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    role?: true
    defaultPaymentMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    role: $Enums.Role
    defaultPaymentMethod: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    defaultPaymentMethod?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    cart?: boolean | User$cartArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    defaultPaymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "role" | "defaultPaymentMethod" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | User$cartArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      role: $Enums.Role
      defaultPaymentMethod: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {
      address: Prisma.$AddressPayload | null
    }
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly defaultPaymentMethod: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    rating: number | null
    numReviews: number | null
    discount: number | null
    sold: number | null
  }

  export type ProductSumAggregateOutputType = {
    rating: number | null
    numReviews: number | null
    discount: number | null
    sold: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    longDescription: string | null
    brand: string | null
    slug: string | null
    rating: number | null
    numReviews: number | null
    featured: boolean | null
    sku: string | null
    discount: number | null
    sold: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    longDescription: string | null
    brand: string | null
    slug: string | null
    rating: number | null
    numReviews: number | null
    featured: boolean | null
    sku: string | null
    discount: number | null
    sold: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    longDescription: number
    brand: number
    slug: number
    rating: number
    numReviews: number
    featured: number
    sku: number
    discount: number
    sold: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    rating?: true
    numReviews?: true
    discount?: true
    sold?: true
  }

  export type ProductSumAggregateInputType = {
    rating?: true
    numReviews?: true
    discount?: true
    sold?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    longDescription?: true
    brand?: true
    slug?: true
    rating?: true
    numReviews?: true
    featured?: true
    sku?: true
    discount?: true
    sold?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    longDescription?: true
    brand?: true
    slug?: true
    rating?: true
    numReviews?: true
    featured?: true
    sku?: true
    discount?: true
    sold?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    longDescription?: true
    brand?: true
    slug?: true
    rating?: true
    numReviews?: true
    featured?: true
    sku?: true
    discount?: true
    sold?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    description: string
    longDescription: string
    brand: string | null
    slug: string
    rating: number
    numReviews: number
    featured: boolean
    sku: string
    discount: number | null
    sold: number | null
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    brand?: boolean
    slug?: boolean
    benefits?: boolean | ProductBenefitDefaultArgs<ExtArgs>
    ingredients?: boolean | ProductIngredientDefaultArgs<ExtArgs>
    rating?: boolean
    numReviews?: boolean
    featured?: boolean
    sku?: boolean
    images?: boolean | ImageDefaultArgs<ExtArgs>
    sizes?: boolean | ProductSizeDefaultArgs<ExtArgs>
    discount?: boolean
    sold?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    productSubCategories?: boolean | Product$productSubCategoriesArgs<ExtArgs>
    productReviews?: boolean | Product$productReviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    brand?: boolean
    slug?: boolean
    rating?: boolean
    numReviews?: boolean
    featured?: boolean
    sku?: boolean
    discount?: boolean
    sold?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "longDescription" | "brand" | "slug" | "benefits" | "ingredients" | "rating" | "numReviews" | "featured" | "sku" | "images" | "sizes" | "discount" | "sold" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    productSubCategories?: boolean | Product$productSubCategoriesArgs<ExtArgs>
    productReviews?: boolean | Product$productReviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      productSubCategories: Prisma.$ProductSubCategoryPayload<ExtArgs>[]
      productReviews: Prisma.$ProductReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      longDescription: string
      brand: string | null
      slug: string
      rating: number
      numReviews: number
      featured: boolean
      sku: string
      discount: number | null
      sold: number | null
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {
      benefits: Prisma.$ProductBenefitPayload[]
      ingredients: Prisma.$ProductIngredientPayload[]
      images: Prisma.$ImagePayload[]
      sizes: Prisma.$ProductSizePayload[]
    }
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productSubCategories<T extends Product$productSubCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$productSubCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productReviews<T extends Product$productReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$productReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly longDescription: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly rating: FieldRef<"Product", 'Float'>
    readonly numReviews: FieldRef<"Product", 'Int'>
    readonly featured: FieldRef<"Product", 'Boolean'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly discount: FieldRef<"Product", 'Float'>
    readonly sold: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product.productSubCategories
   */
  export type Product$productSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    where?: ProductSubCategoryWhereInput
    orderBy?: ProductSubCategoryOrderByWithRelationInput | ProductSubCategoryOrderByWithRelationInput[]
    cursor?: ProductSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSubCategoryScalarFieldEnum | ProductSubCategoryScalarFieldEnum[]
  }

  /**
   * Product.productReviews
   */
  export type Product$productReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    where?: ProductReviewWhereInput
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    cursor?: ProductReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    review: string | null
    reviewCreatedAt: Date | null
    verified: boolean | null
    reviewById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    review: string | null
    reviewCreatedAt: Date | null
    verified: boolean | null
    reviewById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    review: number
    reviewCreatedAt: number
    verified: number
    reviewById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    reviewCreatedAt?: true
    verified?: true
    reviewById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    reviewCreatedAt?: true
    verified?: true
    reviewById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    reviewCreatedAt?: true
    verified?: true
    reviewById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    review: string
    reviewCreatedAt: Date
    verified: boolean
    reviewById: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    reviewCreatedAt?: boolean
    verified?: boolean
    reviewById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewBy?: boolean | UserDefaultArgs<ExtArgs>
    productReviews?: boolean | Review$productReviewsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    review?: boolean
    reviewCreatedAt?: boolean
    verified?: boolean
    reviewById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "review" | "reviewCreatedAt" | "verified" | "reviewById" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewBy?: boolean | UserDefaultArgs<ExtArgs>
    productReviews?: boolean | Review$productReviewsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewBy: Prisma.$UserPayload<ExtArgs>
      productReviews: Prisma.$ProductReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      review: string
      reviewCreatedAt: Date
      verified: boolean
      reviewById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productReviews<T extends Review$productReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Review$productReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly review: FieldRef<"Review", 'String'>
    readonly reviewCreatedAt: FieldRef<"Review", 'DateTime'>
    readonly verified: FieldRef<"Review", 'Boolean'>
    readonly reviewById: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review.productReviews
   */
  export type Review$productReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    where?: ProductReviewWhereInput
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    cursor?: ProductReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ProductReview
   */

  export type AggregateProductReview = {
    _count: ProductReviewCountAggregateOutputType | null
    _min: ProductReviewMinAggregateOutputType | null
    _max: ProductReviewMaxAggregateOutputType | null
  }

  export type ProductReviewMinAggregateOutputType = {
    id: string | null
    productId: string | null
    reviewId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductReviewMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    reviewId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductReviewCountAggregateOutputType = {
    id: number
    productId: number
    reviewId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductReviewMinAggregateInputType = {
    id?: true
    productId?: true
    reviewId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductReviewMaxAggregateInputType = {
    id?: true
    productId?: true
    reviewId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductReviewCountAggregateInputType = {
    id?: true
    productId?: true
    reviewId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReview to aggregate.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductReviews
    **/
    _count?: true | ProductReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductReviewMaxAggregateInputType
  }

  export type GetProductReviewAggregateType<T extends ProductReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateProductReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductReview[P]>
      : GetScalarType<T[P], AggregateProductReview[P]>
  }




  export type ProductReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewWhereInput
    orderBy?: ProductReviewOrderByWithAggregationInput | ProductReviewOrderByWithAggregationInput[]
    by: ProductReviewScalarFieldEnum[] | ProductReviewScalarFieldEnum
    having?: ProductReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductReviewCountAggregateInputType | true
    _min?: ProductReviewMinAggregateInputType
    _max?: ProductReviewMaxAggregateInputType
  }

  export type ProductReviewGroupByOutputType = {
    id: string
    productId: string
    reviewId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductReviewCountAggregateOutputType | null
    _min: ProductReviewMinAggregateOutputType | null
    _max: ProductReviewMaxAggregateOutputType | null
  }

  type GetProductReviewGroupByPayload<T extends ProductReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ProductReviewGroupByOutputType[P]>
        }
      >
    >


  export type ProductReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    reviewId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productReview"]>



  export type ProductReviewSelectScalar = {
    id?: boolean
    productId?: boolean
    reviewId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "reviewId" | "createdAt" | "updatedAt", ExtArgs["result"]["productReview"]>
  export type ProductReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ProductReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductReview"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      reviewId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productReview"]>
    composites: {}
  }

  type ProductReviewGetPayload<S extends boolean | null | undefined | ProductReviewDefaultArgs> = $Result.GetResult<Prisma.$ProductReviewPayload, S>

  type ProductReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductReviewCountAggregateInputType | true
    }

  export interface ProductReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductReview'], meta: { name: 'ProductReview' } }
    /**
     * Find zero or one ProductReview that matches the filter.
     * @param {ProductReviewFindUniqueArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductReviewFindUniqueArgs>(args: SelectSubset<T, ProductReviewFindUniqueArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductReviewFindUniqueOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductReviewFindFirstArgs>(args?: SelectSubset<T, ProductReviewFindFirstArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductReviews
     * const productReviews = await prisma.productReview.findMany()
     * 
     * // Get first 10 ProductReviews
     * const productReviews = await prisma.productReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productReviewWithIdOnly = await prisma.productReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductReviewFindManyArgs>(args?: SelectSubset<T, ProductReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductReview.
     * @param {ProductReviewCreateArgs} args - Arguments to create a ProductReview.
     * @example
     * // Create one ProductReview
     * const ProductReview = await prisma.productReview.create({
     *   data: {
     *     // ... data to create a ProductReview
     *   }
     * })
     * 
     */
    create<T extends ProductReviewCreateArgs>(args: SelectSubset<T, ProductReviewCreateArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductReviews.
     * @param {ProductReviewCreateManyArgs} args - Arguments to create many ProductReviews.
     * @example
     * // Create many ProductReviews
     * const productReview = await prisma.productReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductReviewCreateManyArgs>(args?: SelectSubset<T, ProductReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductReview.
     * @param {ProductReviewDeleteArgs} args - Arguments to delete one ProductReview.
     * @example
     * // Delete one ProductReview
     * const ProductReview = await prisma.productReview.delete({
     *   where: {
     *     // ... filter to delete one ProductReview
     *   }
     * })
     * 
     */
    delete<T extends ProductReviewDeleteArgs>(args: SelectSubset<T, ProductReviewDeleteArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductReview.
     * @param {ProductReviewUpdateArgs} args - Arguments to update one ProductReview.
     * @example
     * // Update one ProductReview
     * const productReview = await prisma.productReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductReviewUpdateArgs>(args: SelectSubset<T, ProductReviewUpdateArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductReviews.
     * @param {ProductReviewDeleteManyArgs} args - Arguments to filter ProductReviews to delete.
     * @example
     * // Delete a few ProductReviews
     * const { count } = await prisma.productReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductReviewDeleteManyArgs>(args?: SelectSubset<T, ProductReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductReviews
     * const productReview = await prisma.productReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductReviewUpdateManyArgs>(args: SelectSubset<T, ProductReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductReview.
     * @param {ProductReviewUpsertArgs} args - Arguments to update or create a ProductReview.
     * @example
     * // Update or create a ProductReview
     * const productReview = await prisma.productReview.upsert({
     *   create: {
     *     // ... data to create a ProductReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductReview we want to update
     *   }
     * })
     */
    upsert<T extends ProductReviewUpsertArgs>(args: SelectSubset<T, ProductReviewUpsertArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductReviews that matches the filter.
     * @param {ProductReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productReview = await prisma.productReview.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductReview.
     * @param {ProductReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productReview = await prisma.productReview.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewCountArgs} args - Arguments to filter ProductReviews to count.
     * @example
     * // Count the number of ProductReviews
     * const count = await prisma.productReview.count({
     *   where: {
     *     // ... the filter for the ProductReviews we want to count
     *   }
     * })
    **/
    count<T extends ProductReviewCountArgs>(
      args?: Subset<T, ProductReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductReviewAggregateArgs>(args: Subset<T, ProductReviewAggregateArgs>): Prisma.PrismaPromise<GetProductReviewAggregateType<T>>

    /**
     * Group by ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductReviewGroupByArgs['orderBy'] }
        : { orderBy?: ProductReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductReview model
   */
  readonly fields: ProductReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductReview model
   */
  interface ProductReviewFieldRefs {
    readonly id: FieldRef<"ProductReview", 'String'>
    readonly productId: FieldRef<"ProductReview", 'String'>
    readonly reviewId: FieldRef<"ProductReview", 'String'>
    readonly createdAt: FieldRef<"ProductReview", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductReview findUnique
   */
  export type ProductReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview findUniqueOrThrow
   */
  export type ProductReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview findFirst
   */
  export type ProductReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview findFirstOrThrow
   */
  export type ProductReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview findMany
   */
  export type ProductReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviews to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview create
   */
  export type ProductReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductReview.
     */
    data: XOR<ProductReviewCreateInput, ProductReviewUncheckedCreateInput>
  }

  /**
   * ProductReview createMany
   */
  export type ProductReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductReviews.
     */
    data: ProductReviewCreateManyInput | ProductReviewCreateManyInput[]
  }

  /**
   * ProductReview update
   */
  export type ProductReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductReview.
     */
    data: XOR<ProductReviewUpdateInput, ProductReviewUncheckedUpdateInput>
    /**
     * Choose, which ProductReview to update.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview updateMany
   */
  export type ProductReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductReviews.
     */
    data: XOR<ProductReviewUpdateManyMutationInput, ProductReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProductReviews to update
     */
    where?: ProductReviewWhereInput
    /**
     * Limit how many ProductReviews to update.
     */
    limit?: number
  }

  /**
   * ProductReview upsert
   */
  export type ProductReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductReview to update in case it exists.
     */
    where: ProductReviewWhereUniqueInput
    /**
     * In case the ProductReview found by the `where` argument doesn't exist, create a new ProductReview with this data.
     */
    create: XOR<ProductReviewCreateInput, ProductReviewUncheckedCreateInput>
    /**
     * In case the ProductReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductReviewUpdateInput, ProductReviewUncheckedUpdateInput>
  }

  /**
   * ProductReview delete
   */
  export type ProductReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter which ProductReview to delete.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview deleteMany
   */
  export type ProductReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReviews to delete
     */
    where?: ProductReviewWhereInput
    /**
     * Limit how many ProductReviews to delete.
     */
    limit?: number
  }

  /**
   * ProductReview findRaw
   */
  export type ProductReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProductReview aggregateRaw
   */
  export type ProductReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProductReview without action
   */
  export type ProductReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    images?: boolean | ImageDefaultArgs<ExtArgs>
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "images" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {
      images: Prisma.$ImagePayload[]
    }
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    parentId: string
    createdAt: Date
    updatedAt: Date
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    images?: boolean | SubCategoryImageDefaultArgs<ExtArgs>
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | CategoryDefaultArgs<ExtArgs>
    productSubCategories?: boolean | SubCategory$productSubCategoriesArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>



  export type SubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "images" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | CategoryDefaultArgs<ExtArgs>
    productSubCategories?: boolean | SubCategory$productSubCategoriesArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs>
      productSubCategories: Prisma.$ProductSubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      parentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subCategory"]>
    composites: {
      images: Prisma.$SubCategoryImagePayload[]
    }
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * @param {SubCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subCategory = await prisma.subCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SubCategory.
     * @param {SubCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subCategory = await prisma.subCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productSubCategories<T extends SubCategory$productSubCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$productSubCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategory model
   */
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'String'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly slug: FieldRef<"SubCategory", 'String'>
    readonly parentId: FieldRef<"SubCategory", 'String'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategory findRaw
   */
  export type SubCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SubCategory aggregateRaw
   */
  export type SubCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SubCategory.productSubCategories
   */
  export type SubCategory$productSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    where?: ProductSubCategoryWhereInput
    orderBy?: ProductSubCategoryOrderByWithRelationInput | ProductSubCategoryOrderByWithRelationInput[]
    cursor?: ProductSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSubCategoryScalarFieldEnum | ProductSubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductSubCategory
   */

  export type AggregateProductSubCategory = {
    _count: ProductSubCategoryCountAggregateOutputType | null
    _min: ProductSubCategoryMinAggregateOutputType | null
    _max: ProductSubCategoryMaxAggregateOutputType | null
  }

  export type ProductSubCategoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    subCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSubCategoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    subCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSubCategoryCountAggregateOutputType = {
    id: number
    productId: number
    subCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductSubCategoryMinAggregateInputType = {
    id?: true
    productId?: true
    subCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSubCategoryMaxAggregateInputType = {
    id?: true
    productId?: true
    subCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSubCategoryCountAggregateInputType = {
    id?: true
    productId?: true
    subCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductSubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSubCategory to aggregate.
     */
    where?: ProductSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSubCategories to fetch.
     */
    orderBy?: ProductSubCategoryOrderByWithRelationInput | ProductSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSubCategories
    **/
    _count?: true | ProductSubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSubCategoryMaxAggregateInputType
  }

  export type GetProductSubCategoryAggregateType<T extends ProductSubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSubCategory[P]>
      : GetScalarType<T[P], AggregateProductSubCategory[P]>
  }




  export type ProductSubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSubCategoryWhereInput
    orderBy?: ProductSubCategoryOrderByWithAggregationInput | ProductSubCategoryOrderByWithAggregationInput[]
    by: ProductSubCategoryScalarFieldEnum[] | ProductSubCategoryScalarFieldEnum
    having?: ProductSubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSubCategoryCountAggregateInputType | true
    _min?: ProductSubCategoryMinAggregateInputType
    _max?: ProductSubCategoryMaxAggregateInputType
  }

  export type ProductSubCategoryGroupByOutputType = {
    id: string
    productId: string
    subCategoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductSubCategoryCountAggregateOutputType | null
    _min: ProductSubCategoryMinAggregateOutputType | null
    _max: ProductSubCategoryMaxAggregateOutputType | null
  }

  type GetProductSubCategoryGroupByPayload<T extends ProductSubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductSubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    subCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSubCategory"]>



  export type ProductSubCategorySelectScalar = {
    id?: boolean
    productId?: boolean
    subCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductSubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "subCategoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["productSubCategory"]>
  export type ProductSubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }

  export type $ProductSubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSubCategory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      subCategory: Prisma.$SubCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      subCategoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productSubCategory"]>
    composites: {}
  }

  type ProductSubCategoryGetPayload<S extends boolean | null | undefined | ProductSubCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductSubCategoryPayload, S>

  type ProductSubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSubCategoryCountAggregateInputType | true
    }

  export interface ProductSubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSubCategory'], meta: { name: 'ProductSubCategory' } }
    /**
     * Find zero or one ProductSubCategory that matches the filter.
     * @param {ProductSubCategoryFindUniqueArgs} args - Arguments to find a ProductSubCategory
     * @example
     * // Get one ProductSubCategory
     * const productSubCategory = await prisma.productSubCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSubCategoryFindUniqueArgs>(args: SelectSubset<T, ProductSubCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSubCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductSubCategory
     * @example
     * // Get one ProductSubCategory
     * const productSubCategory = await prisma.productSubCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryFindFirstArgs} args - Arguments to find a ProductSubCategory
     * @example
     * // Get one ProductSubCategory
     * const productSubCategory = await prisma.productSubCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSubCategoryFindFirstArgs>(args?: SelectSubset<T, ProductSubCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductSubCategory
     * @example
     * // Get one ProductSubCategory
     * const productSubCategory = await prisma.productSubCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSubCategories
     * const productSubCategories = await prisma.productSubCategory.findMany()
     * 
     * // Get first 10 ProductSubCategories
     * const productSubCategories = await prisma.productSubCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSubCategoryWithIdOnly = await prisma.productSubCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSubCategoryFindManyArgs>(args?: SelectSubset<T, ProductSubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSubCategory.
     * @param {ProductSubCategoryCreateArgs} args - Arguments to create a ProductSubCategory.
     * @example
     * // Create one ProductSubCategory
     * const ProductSubCategory = await prisma.productSubCategory.create({
     *   data: {
     *     // ... data to create a ProductSubCategory
     *   }
     * })
     * 
     */
    create<T extends ProductSubCategoryCreateArgs>(args: SelectSubset<T, ProductSubCategoryCreateArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSubCategories.
     * @param {ProductSubCategoryCreateManyArgs} args - Arguments to create many ProductSubCategories.
     * @example
     * // Create many ProductSubCategories
     * const productSubCategory = await prisma.productSubCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSubCategoryCreateManyArgs>(args?: SelectSubset<T, ProductSubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductSubCategory.
     * @param {ProductSubCategoryDeleteArgs} args - Arguments to delete one ProductSubCategory.
     * @example
     * // Delete one ProductSubCategory
     * const ProductSubCategory = await prisma.productSubCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductSubCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductSubCategoryDeleteArgs>(args: SelectSubset<T, ProductSubCategoryDeleteArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSubCategory.
     * @param {ProductSubCategoryUpdateArgs} args - Arguments to update one ProductSubCategory.
     * @example
     * // Update one ProductSubCategory
     * const productSubCategory = await prisma.productSubCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSubCategoryUpdateArgs>(args: SelectSubset<T, ProductSubCategoryUpdateArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSubCategories.
     * @param {ProductSubCategoryDeleteManyArgs} args - Arguments to filter ProductSubCategories to delete.
     * @example
     * // Delete a few ProductSubCategories
     * const { count } = await prisma.productSubCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSubCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductSubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSubCategories
     * const productSubCategory = await prisma.productSubCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSubCategoryUpdateManyArgs>(args: SelectSubset<T, ProductSubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductSubCategory.
     * @param {ProductSubCategoryUpsertArgs} args - Arguments to update or create a ProductSubCategory.
     * @example
     * // Update or create a ProductSubCategory
     * const productSubCategory = await prisma.productSubCategory.upsert({
     *   create: {
     *     // ... data to create a ProductSubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSubCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductSubCategoryUpsertArgs>(args: SelectSubset<T, ProductSubCategoryUpsertArgs<ExtArgs>>): Prisma__ProductSubCategoryClient<$Result.GetResult<Prisma.$ProductSubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSubCategories that matches the filter.
     * @param {ProductSubCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productSubCategory = await prisma.productSubCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductSubCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductSubCategory.
     * @param {ProductSubCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productSubCategory = await prisma.productSubCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductSubCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryCountArgs} args - Arguments to filter ProductSubCategories to count.
     * @example
     * // Count the number of ProductSubCategories
     * const count = await prisma.productSubCategory.count({
     *   where: {
     *     // ... the filter for the ProductSubCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductSubCategoryCountArgs>(
      args?: Subset<T, ProductSubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductSubCategoryAggregateArgs>(args: Subset<T, ProductSubCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductSubCategoryAggregateType<T>>

    /**
     * Group by ProductSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductSubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductSubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductSubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSubCategory model
   */
  readonly fields: ProductSubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subCategory<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductSubCategory model
   */
  interface ProductSubCategoryFieldRefs {
    readonly id: FieldRef<"ProductSubCategory", 'String'>
    readonly productId: FieldRef<"ProductSubCategory", 'String'>
    readonly subCategoryId: FieldRef<"ProductSubCategory", 'String'>
    readonly createdAt: FieldRef<"ProductSubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductSubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductSubCategory findUnique
   */
  export type ProductSubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductSubCategory to fetch.
     */
    where: ProductSubCategoryWhereUniqueInput
  }

  /**
   * ProductSubCategory findUniqueOrThrow
   */
  export type ProductSubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductSubCategory to fetch.
     */
    where: ProductSubCategoryWhereUniqueInput
  }

  /**
   * ProductSubCategory findFirst
   */
  export type ProductSubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductSubCategory to fetch.
     */
    where?: ProductSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSubCategories to fetch.
     */
    orderBy?: ProductSubCategoryOrderByWithRelationInput | ProductSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSubCategories.
     */
    cursor?: ProductSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSubCategories.
     */
    distinct?: ProductSubCategoryScalarFieldEnum | ProductSubCategoryScalarFieldEnum[]
  }

  /**
   * ProductSubCategory findFirstOrThrow
   */
  export type ProductSubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductSubCategory to fetch.
     */
    where?: ProductSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSubCategories to fetch.
     */
    orderBy?: ProductSubCategoryOrderByWithRelationInput | ProductSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSubCategories.
     */
    cursor?: ProductSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSubCategories.
     */
    distinct?: ProductSubCategoryScalarFieldEnum | ProductSubCategoryScalarFieldEnum[]
  }

  /**
   * ProductSubCategory findMany
   */
  export type ProductSubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductSubCategories to fetch.
     */
    where?: ProductSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSubCategories to fetch.
     */
    orderBy?: ProductSubCategoryOrderByWithRelationInput | ProductSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSubCategories.
     */
    cursor?: ProductSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSubCategories.
     */
    skip?: number
    distinct?: ProductSubCategoryScalarFieldEnum | ProductSubCategoryScalarFieldEnum[]
  }

  /**
   * ProductSubCategory create
   */
  export type ProductSubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSubCategory.
     */
    data: XOR<ProductSubCategoryCreateInput, ProductSubCategoryUncheckedCreateInput>
  }

  /**
   * ProductSubCategory createMany
   */
  export type ProductSubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSubCategories.
     */
    data: ProductSubCategoryCreateManyInput | ProductSubCategoryCreateManyInput[]
  }

  /**
   * ProductSubCategory update
   */
  export type ProductSubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSubCategory.
     */
    data: XOR<ProductSubCategoryUpdateInput, ProductSubCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductSubCategory to update.
     */
    where: ProductSubCategoryWhereUniqueInput
  }

  /**
   * ProductSubCategory updateMany
   */
  export type ProductSubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSubCategories.
     */
    data: XOR<ProductSubCategoryUpdateManyMutationInput, ProductSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductSubCategories to update
     */
    where?: ProductSubCategoryWhereInput
    /**
     * Limit how many ProductSubCategories to update.
     */
    limit?: number
  }

  /**
   * ProductSubCategory upsert
   */
  export type ProductSubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSubCategory to update in case it exists.
     */
    where: ProductSubCategoryWhereUniqueInput
    /**
     * In case the ProductSubCategory found by the `where` argument doesn't exist, create a new ProductSubCategory with this data.
     */
    create: XOR<ProductSubCategoryCreateInput, ProductSubCategoryUncheckedCreateInput>
    /**
     * In case the ProductSubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSubCategoryUpdateInput, ProductSubCategoryUncheckedUpdateInput>
  }

  /**
   * ProductSubCategory delete
   */
  export type ProductSubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductSubCategory to delete.
     */
    where: ProductSubCategoryWhereUniqueInput
  }

  /**
   * ProductSubCategory deleteMany
   */
  export type ProductSubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSubCategories to delete
     */
    where?: ProductSubCategoryWhereInput
    /**
     * Limit how many ProductSubCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductSubCategory findRaw
   */
  export type ProductSubCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProductSubCategory aggregateRaw
   */
  export type ProductSubCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProductSubCategory without action
   */
  export type ProductSubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSubCategory
     */
    select?: ProductSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSubCategory
     */
    omit?: ProductSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    cartTotal: number | null
    totalAfterDiscount: number | null
  }

  export type CartSumAggregateOutputType = {
    cartTotal: number | null
    totalAfterDiscount: number | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    cartTotal: number | null
    totalAfterDiscount: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    cartTotal: number | null
    totalAfterDiscount: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    cartTotal: number
    totalAfterDiscount: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    cartTotal?: true
    totalAfterDiscount?: true
  }

  export type CartSumAggregateInputType = {
    cartTotal?: true
    totalAfterDiscount?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    cartTotal?: true
    totalAfterDiscount?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    cartTotal?: true
    totalAfterDiscount?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    cartTotal?: true
    totalAfterDiscount?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    cartTotal: number | null
    totalAfterDiscount: number | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    products?: boolean | CartProductDefaultArgs<ExtArgs>
    cartTotal?: boolean
    totalAfterDiscount?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type CartSelectScalar = {
    id?: boolean
    cartTotal?: boolean
    totalAfterDiscount?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "products" | "cartTotal" | "totalAfterDiscount" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartTotal: number | null
      totalAfterDiscount: number | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {
      products: Prisma.$CartProductPayload[]
    }
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * @param {CartFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cart = await prisma.cart.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CartFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cart.
     * @param {CartAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cart = await prisma.cart.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CartAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly cartTotal: FieldRef<"Cart", 'Float'>
    readonly totalAfterDiscount: FieldRef<"Cart", 'Float'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart findRaw
   */
  export type CartFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cart aggregateRaw
   */
  export type CartAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
    totalBeforeDiscount: number | null
    shippingPrice: number | null
    taxPrice: number | null
    totalSaved: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
    totalBeforeDiscount: number | null
    shippingPrice: number | null
    taxPrice: number | null
    totalSaved: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    paymentMethod: string | null
    total: number | null
    status: string | null
    totalBeforeDiscount: number | null
    couponApplied: string | null
    shippingPrice: number | null
    taxPrice: number | null
    isPaid: boolean | null
    totalSaved: number | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    paidAt: Date | null
    deliveredAt: Date | null
    isNew: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    paymentMethod: string | null
    total: number | null
    status: string | null
    totalBeforeDiscount: number | null
    couponApplied: string | null
    shippingPrice: number | null
    taxPrice: number | null
    isPaid: boolean | null
    totalSaved: number | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    paidAt: Date | null
    deliveredAt: Date | null
    isNew: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    paymentMethod: number
    total: number
    status: number
    totalBeforeDiscount: number
    couponApplied: number
    shippingPrice: number
    taxPrice: number
    isPaid: number
    totalSaved: number
    razorpay_order_id: number
    razorpay_payment_id: number
    paidAt: number
    deliveredAt: number
    isNew: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
    totalBeforeDiscount?: true
    shippingPrice?: true
    taxPrice?: true
    totalSaved?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
    totalBeforeDiscount?: true
    shippingPrice?: true
    taxPrice?: true
    totalSaved?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    paymentMethod?: true
    total?: true
    status?: true
    totalBeforeDiscount?: true
    couponApplied?: true
    shippingPrice?: true
    taxPrice?: true
    isPaid?: true
    totalSaved?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    paidAt?: true
    deliveredAt?: true
    isNew?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    paymentMethod?: true
    total?: true
    status?: true
    totalBeforeDiscount?: true
    couponApplied?: true
    shippingPrice?: true
    taxPrice?: true
    isPaid?: true
    totalSaved?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    paidAt?: true
    deliveredAt?: true
    isNew?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    paymentMethod?: true
    total?: true
    status?: true
    totalBeforeDiscount?: true
    couponApplied?: true
    shippingPrice?: true
    taxPrice?: true
    isPaid?: true
    totalSaved?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    paidAt?: true
    deliveredAt?: true
    isNew?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    paymentMethod: string | null
    total: number
    status: string | null
    totalBeforeDiscount: number | null
    couponApplied: string | null
    shippingPrice: number
    taxPrice: number | null
    isPaid: boolean
    totalSaved: number | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    paidAt: Date | null
    deliveredAt: Date | null
    isNew: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    products?: boolean | OrderProductDefaultArgs<ExtArgs>
    shippingAddress?: boolean | ShippingAddressDefaultArgs<ExtArgs>
    paymentMethod?: boolean
    paymentResult?: boolean | PaymentResultDefaultArgs<ExtArgs>
    total?: boolean
    status?: boolean
    totalBeforeDiscount?: boolean
    couponApplied?: boolean
    shippingPrice?: boolean
    taxPrice?: boolean
    isPaid?: boolean
    totalSaved?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    paidAt?: boolean
    deliveredAt?: boolean
    isNew?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    paymentMethod?: boolean
    total?: boolean
    status?: boolean
    totalBeforeDiscount?: boolean
    couponApplied?: boolean
    shippingPrice?: boolean
    taxPrice?: boolean
    isPaid?: boolean
    totalSaved?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    paidAt?: boolean
    deliveredAt?: boolean
    isNew?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "products" | "shippingAddress" | "paymentMethod" | "paymentResult" | "total" | "status" | "totalBeforeDiscount" | "couponApplied" | "shippingPrice" | "taxPrice" | "isPaid" | "totalSaved" | "razorpay_order_id" | "razorpay_payment_id" | "paidAt" | "deliveredAt" | "isNew" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentMethod: string | null
      total: number
      status: string | null
      totalBeforeDiscount: number | null
      couponApplied: string | null
      shippingPrice: number
      taxPrice: number | null
      isPaid: boolean
      totalSaved: number | null
      razorpay_order_id: string | null
      razorpay_payment_id: string | null
      paidAt: Date | null
      deliveredAt: Date | null
      isNew: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {
      products: Prisma.$OrderProductPayload[]
      shippingAddress: Prisma.$ShippingAddressPayload | null
      paymentResult: Prisma.$PaymentResultPayload | null
    }
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * @param {OrderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const order = await prisma.order.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OrderFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Order.
     * @param {OrderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const order = await prisma.order.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OrderAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'String'>
    readonly totalBeforeDiscount: FieldRef<"Order", 'Float'>
    readonly couponApplied: FieldRef<"Order", 'String'>
    readonly shippingPrice: FieldRef<"Order", 'Float'>
    readonly taxPrice: FieldRef<"Order", 'Float'>
    readonly isPaid: FieldRef<"Order", 'Boolean'>
    readonly totalSaved: FieldRef<"Order", 'Float'>
    readonly razorpay_order_id: FieldRef<"Order", 'String'>
    readonly razorpay_payment_id: FieldRef<"Order", 'String'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly deliveredAt: FieldRef<"Order", 'DateTime'>
    readonly isNew: FieldRef<"Order", 'Boolean'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order findRaw
   */
  export type OrderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Order aggregateRaw
   */
  export type OrderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    discount: number | null
  }

  export type CouponSumAggregateOutputType = {
    discount: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    coupon: string | null
    startDate: string | null
    endDate: string | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    coupon: string | null
    startDate: string | null
    endDate: string | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    coupon: number
    startDate: number
    endDate: number
    discount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    discount?: true
  }

  export type CouponSumAggregateInputType = {
    discount?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    coupon?: true
    startDate?: true
    endDate?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    coupon?: true
    startDate?: true
    endDate?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    coupon?: true
    startDate?: true
    endDate?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    coupon: string
    startDate: string
    endDate: string
    discount: number
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coupon?: boolean
    startDate?: boolean
    endDate?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coupon"]>



  export type CouponSelectScalar = {
    id?: boolean
    coupon?: boolean
    startDate?: boolean
    endDate?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coupon" | "startDate" | "endDate" | "discount" | "createdAt" | "updatedAt", ExtArgs["result"]["coupon"]>

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coupon: string
      startDate: string
      endDate: string
      discount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * @param {CouponFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const coupon = await prisma.coupon.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CouponFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Coupon.
     * @param {CouponAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const coupon = await prisma.coupon.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CouponAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly coupon: FieldRef<"Coupon", 'String'>
    readonly startDate: FieldRef<"Coupon", 'String'>
    readonly endDate: FieldRef<"Coupon", 'String'>
    readonly discount: FieldRef<"Coupon", 'Float'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon findRaw
   */
  export type CouponFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Coupon aggregateRaw
   */
  export type CouponAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
  }


  /**
   * Model HomeScreenOffer
   */

  export type AggregateHomeScreenOffer = {
    _count: HomeScreenOfferCountAggregateOutputType | null
    _min: HomeScreenOfferMinAggregateOutputType | null
    _max: HomeScreenOfferMaxAggregateOutputType | null
  }

  export type HomeScreenOfferMinAggregateOutputType = {
    id: string | null
    title: string | null
    link: string | null
    type: $Enums.OfferType | null
  }

  export type HomeScreenOfferMaxAggregateOutputType = {
    id: string | null
    title: string | null
    link: string | null
    type: $Enums.OfferType | null
  }

  export type HomeScreenOfferCountAggregateOutputType = {
    id: number
    title: number
    link: number
    type: number
    _all: number
  }


  export type HomeScreenOfferMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    type?: true
  }

  export type HomeScreenOfferMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    type?: true
  }

  export type HomeScreenOfferCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    type?: true
    _all?: true
  }

  export type HomeScreenOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeScreenOffer to aggregate.
     */
    where?: HomeScreenOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeScreenOffers to fetch.
     */
    orderBy?: HomeScreenOfferOrderByWithRelationInput | HomeScreenOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeScreenOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeScreenOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeScreenOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeScreenOffers
    **/
    _count?: true | HomeScreenOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeScreenOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeScreenOfferMaxAggregateInputType
  }

  export type GetHomeScreenOfferAggregateType<T extends HomeScreenOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeScreenOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeScreenOffer[P]>
      : GetScalarType<T[P], AggregateHomeScreenOffer[P]>
  }




  export type HomeScreenOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeScreenOfferWhereInput
    orderBy?: HomeScreenOfferOrderByWithAggregationInput | HomeScreenOfferOrderByWithAggregationInput[]
    by: HomeScreenOfferScalarFieldEnum[] | HomeScreenOfferScalarFieldEnum
    having?: HomeScreenOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeScreenOfferCountAggregateInputType | true
    _min?: HomeScreenOfferMinAggregateInputType
    _max?: HomeScreenOfferMaxAggregateInputType
  }

  export type HomeScreenOfferGroupByOutputType = {
    id: string
    title: string
    link: string
    type: $Enums.OfferType
    _count: HomeScreenOfferCountAggregateOutputType | null
    _min: HomeScreenOfferMinAggregateOutputType | null
    _max: HomeScreenOfferMaxAggregateOutputType | null
  }

  type GetHomeScreenOfferGroupByPayload<T extends HomeScreenOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeScreenOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeScreenOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeScreenOfferGroupByOutputType[P]>
            : GetScalarType<T[P], HomeScreenOfferGroupByOutputType[P]>
        }
      >
    >


  export type HomeScreenOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    type?: boolean
    images?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeScreenOffer"]>



  export type HomeScreenOfferSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    type?: boolean
  }

  export type HomeScreenOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "link" | "type" | "images", ExtArgs["result"]["homeScreenOffer"]>
  export type HomeScreenOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HomeScreenOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeScreenOffer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      link: string
      type: $Enums.OfferType
    }, ExtArgs["result"]["homeScreenOffer"]>
    composites: {
      images: Prisma.$ImagePayload[]
    }
  }

  type HomeScreenOfferGetPayload<S extends boolean | null | undefined | HomeScreenOfferDefaultArgs> = $Result.GetResult<Prisma.$HomeScreenOfferPayload, S>

  type HomeScreenOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeScreenOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeScreenOfferCountAggregateInputType | true
    }

  export interface HomeScreenOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeScreenOffer'], meta: { name: 'HomeScreenOffer' } }
    /**
     * Find zero or one HomeScreenOffer that matches the filter.
     * @param {HomeScreenOfferFindUniqueArgs} args - Arguments to find a HomeScreenOffer
     * @example
     * // Get one HomeScreenOffer
     * const homeScreenOffer = await prisma.homeScreenOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeScreenOfferFindUniqueArgs>(args: SelectSubset<T, HomeScreenOfferFindUniqueArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomeScreenOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeScreenOfferFindUniqueOrThrowArgs} args - Arguments to find a HomeScreenOffer
     * @example
     * // Get one HomeScreenOffer
     * const homeScreenOffer = await prisma.homeScreenOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeScreenOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeScreenOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeScreenOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferFindFirstArgs} args - Arguments to find a HomeScreenOffer
     * @example
     * // Get one HomeScreenOffer
     * const homeScreenOffer = await prisma.homeScreenOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeScreenOfferFindFirstArgs>(args?: SelectSubset<T, HomeScreenOfferFindFirstArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeScreenOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferFindFirstOrThrowArgs} args - Arguments to find a HomeScreenOffer
     * @example
     * // Get one HomeScreenOffer
     * const homeScreenOffer = await prisma.homeScreenOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeScreenOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeScreenOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomeScreenOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeScreenOffers
     * const homeScreenOffers = await prisma.homeScreenOffer.findMany()
     * 
     * // Get first 10 HomeScreenOffers
     * const homeScreenOffers = await prisma.homeScreenOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeScreenOfferWithIdOnly = await prisma.homeScreenOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeScreenOfferFindManyArgs>(args?: SelectSubset<T, HomeScreenOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomeScreenOffer.
     * @param {HomeScreenOfferCreateArgs} args - Arguments to create a HomeScreenOffer.
     * @example
     * // Create one HomeScreenOffer
     * const HomeScreenOffer = await prisma.homeScreenOffer.create({
     *   data: {
     *     // ... data to create a HomeScreenOffer
     *   }
     * })
     * 
     */
    create<T extends HomeScreenOfferCreateArgs>(args: SelectSubset<T, HomeScreenOfferCreateArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomeScreenOffers.
     * @param {HomeScreenOfferCreateManyArgs} args - Arguments to create many HomeScreenOffers.
     * @example
     * // Create many HomeScreenOffers
     * const homeScreenOffer = await prisma.homeScreenOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeScreenOfferCreateManyArgs>(args?: SelectSubset<T, HomeScreenOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeScreenOffer.
     * @param {HomeScreenOfferDeleteArgs} args - Arguments to delete one HomeScreenOffer.
     * @example
     * // Delete one HomeScreenOffer
     * const HomeScreenOffer = await prisma.homeScreenOffer.delete({
     *   where: {
     *     // ... filter to delete one HomeScreenOffer
     *   }
     * })
     * 
     */
    delete<T extends HomeScreenOfferDeleteArgs>(args: SelectSubset<T, HomeScreenOfferDeleteArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomeScreenOffer.
     * @param {HomeScreenOfferUpdateArgs} args - Arguments to update one HomeScreenOffer.
     * @example
     * // Update one HomeScreenOffer
     * const homeScreenOffer = await prisma.homeScreenOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeScreenOfferUpdateArgs>(args: SelectSubset<T, HomeScreenOfferUpdateArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomeScreenOffers.
     * @param {HomeScreenOfferDeleteManyArgs} args - Arguments to filter HomeScreenOffers to delete.
     * @example
     * // Delete a few HomeScreenOffers
     * const { count } = await prisma.homeScreenOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeScreenOfferDeleteManyArgs>(args?: SelectSubset<T, HomeScreenOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeScreenOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeScreenOffers
     * const homeScreenOffer = await prisma.homeScreenOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeScreenOfferUpdateManyArgs>(args: SelectSubset<T, HomeScreenOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeScreenOffer.
     * @param {HomeScreenOfferUpsertArgs} args - Arguments to update or create a HomeScreenOffer.
     * @example
     * // Update or create a HomeScreenOffer
     * const homeScreenOffer = await prisma.homeScreenOffer.upsert({
     *   create: {
     *     // ... data to create a HomeScreenOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeScreenOffer we want to update
     *   }
     * })
     */
    upsert<T extends HomeScreenOfferUpsertArgs>(args: SelectSubset<T, HomeScreenOfferUpsertArgs<ExtArgs>>): Prisma__HomeScreenOfferClient<$Result.GetResult<Prisma.$HomeScreenOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomeScreenOffers that matches the filter.
     * @param {HomeScreenOfferFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const homeScreenOffer = await prisma.homeScreenOffer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HomeScreenOfferFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HomeScreenOffer.
     * @param {HomeScreenOfferAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const homeScreenOffer = await prisma.homeScreenOffer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HomeScreenOfferAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HomeScreenOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferCountArgs} args - Arguments to filter HomeScreenOffers to count.
     * @example
     * // Count the number of HomeScreenOffers
     * const count = await prisma.homeScreenOffer.count({
     *   where: {
     *     // ... the filter for the HomeScreenOffers we want to count
     *   }
     * })
    **/
    count<T extends HomeScreenOfferCountArgs>(
      args?: Subset<T, HomeScreenOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeScreenOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeScreenOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeScreenOfferAggregateArgs>(args: Subset<T, HomeScreenOfferAggregateArgs>): Prisma.PrismaPromise<GetHomeScreenOfferAggregateType<T>>

    /**
     * Group by HomeScreenOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeScreenOfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeScreenOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeScreenOfferGroupByArgs['orderBy'] }
        : { orderBy?: HomeScreenOfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeScreenOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeScreenOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeScreenOffer model
   */
  readonly fields: HomeScreenOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeScreenOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeScreenOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomeScreenOffer model
   */
  interface HomeScreenOfferFieldRefs {
    readonly id: FieldRef<"HomeScreenOffer", 'String'>
    readonly title: FieldRef<"HomeScreenOffer", 'String'>
    readonly link: FieldRef<"HomeScreenOffer", 'String'>
    readonly type: FieldRef<"HomeScreenOffer", 'OfferType'>
  }
    

  // Custom InputTypes
  /**
   * HomeScreenOffer findUnique
   */
  export type HomeScreenOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * Filter, which HomeScreenOffer to fetch.
     */
    where: HomeScreenOfferWhereUniqueInput
  }

  /**
   * HomeScreenOffer findUniqueOrThrow
   */
  export type HomeScreenOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * Filter, which HomeScreenOffer to fetch.
     */
    where: HomeScreenOfferWhereUniqueInput
  }

  /**
   * HomeScreenOffer findFirst
   */
  export type HomeScreenOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * Filter, which HomeScreenOffer to fetch.
     */
    where?: HomeScreenOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeScreenOffers to fetch.
     */
    orderBy?: HomeScreenOfferOrderByWithRelationInput | HomeScreenOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeScreenOffers.
     */
    cursor?: HomeScreenOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeScreenOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeScreenOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeScreenOffers.
     */
    distinct?: HomeScreenOfferScalarFieldEnum | HomeScreenOfferScalarFieldEnum[]
  }

  /**
   * HomeScreenOffer findFirstOrThrow
   */
  export type HomeScreenOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * Filter, which HomeScreenOffer to fetch.
     */
    where?: HomeScreenOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeScreenOffers to fetch.
     */
    orderBy?: HomeScreenOfferOrderByWithRelationInput | HomeScreenOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeScreenOffers.
     */
    cursor?: HomeScreenOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeScreenOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeScreenOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeScreenOffers.
     */
    distinct?: HomeScreenOfferScalarFieldEnum | HomeScreenOfferScalarFieldEnum[]
  }

  /**
   * HomeScreenOffer findMany
   */
  export type HomeScreenOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * Filter, which HomeScreenOffers to fetch.
     */
    where?: HomeScreenOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeScreenOffers to fetch.
     */
    orderBy?: HomeScreenOfferOrderByWithRelationInput | HomeScreenOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeScreenOffers.
     */
    cursor?: HomeScreenOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeScreenOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeScreenOffers.
     */
    skip?: number
    distinct?: HomeScreenOfferScalarFieldEnum | HomeScreenOfferScalarFieldEnum[]
  }

  /**
   * HomeScreenOffer create
   */
  export type HomeScreenOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a HomeScreenOffer.
     */
    data: XOR<HomeScreenOfferCreateInput, HomeScreenOfferUncheckedCreateInput>
  }

  /**
   * HomeScreenOffer createMany
   */
  export type HomeScreenOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeScreenOffers.
     */
    data: HomeScreenOfferCreateManyInput | HomeScreenOfferCreateManyInput[]
  }

  /**
   * HomeScreenOffer update
   */
  export type HomeScreenOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a HomeScreenOffer.
     */
    data: XOR<HomeScreenOfferUpdateInput, HomeScreenOfferUncheckedUpdateInput>
    /**
     * Choose, which HomeScreenOffer to update.
     */
    where: HomeScreenOfferWhereUniqueInput
  }

  /**
   * HomeScreenOffer updateMany
   */
  export type HomeScreenOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeScreenOffers.
     */
    data: XOR<HomeScreenOfferUpdateManyMutationInput, HomeScreenOfferUncheckedUpdateManyInput>
    /**
     * Filter which HomeScreenOffers to update
     */
    where?: HomeScreenOfferWhereInput
    /**
     * Limit how many HomeScreenOffers to update.
     */
    limit?: number
  }

  /**
   * HomeScreenOffer upsert
   */
  export type HomeScreenOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the HomeScreenOffer to update in case it exists.
     */
    where: HomeScreenOfferWhereUniqueInput
    /**
     * In case the HomeScreenOffer found by the `where` argument doesn't exist, create a new HomeScreenOffer with this data.
     */
    create: XOR<HomeScreenOfferCreateInput, HomeScreenOfferUncheckedCreateInput>
    /**
     * In case the HomeScreenOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeScreenOfferUpdateInput, HomeScreenOfferUncheckedUpdateInput>
  }

  /**
   * HomeScreenOffer delete
   */
  export type HomeScreenOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
    /**
     * Filter which HomeScreenOffer to delete.
     */
    where: HomeScreenOfferWhereUniqueInput
  }

  /**
   * HomeScreenOffer deleteMany
   */
  export type HomeScreenOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeScreenOffers to delete
     */
    where?: HomeScreenOfferWhereInput
    /**
     * Limit how many HomeScreenOffers to delete.
     */
    limit?: number
  }

  /**
   * HomeScreenOffer findRaw
   */
  export type HomeScreenOfferFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HomeScreenOffer aggregateRaw
   */
  export type HomeScreenOfferAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HomeScreenOffer without action
   */
  export type HomeScreenOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeScreenOffer
     */
    select?: HomeScreenOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeScreenOffer
     */
    omit?: HomeScreenOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeScreenOfferInclude<ExtArgs> | null
  }


  /**
   * Model TopBar
   */

  export type AggregateTopBar = {
    _count: TopBarCountAggregateOutputType | null
    _min: TopBarMinAggregateOutputType | null
    _max: TopBarMaxAggregateOutputType | null
  }

  export type TopBarMinAggregateOutputType = {
    id: string | null
    title: string | null
    link: string | null
    textColor: string | null
    backgroundColor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopBarMaxAggregateOutputType = {
    id: string | null
    title: string | null
    link: string | null
    textColor: string | null
    backgroundColor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopBarCountAggregateOutputType = {
    id: number
    title: number
    link: number
    textColor: number
    backgroundColor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopBarMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    textColor?: true
    backgroundColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopBarMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    textColor?: true
    backgroundColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopBarCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    textColor?: true
    backgroundColor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopBarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopBar to aggregate.
     */
    where?: TopBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBars to fetch.
     */
    orderBy?: TopBarOrderByWithRelationInput | TopBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopBars
    **/
    _count?: true | TopBarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopBarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopBarMaxAggregateInputType
  }

  export type GetTopBarAggregateType<T extends TopBarAggregateArgs> = {
        [P in keyof T & keyof AggregateTopBar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopBar[P]>
      : GetScalarType<T[P], AggregateTopBar[P]>
  }




  export type TopBarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopBarWhereInput
    orderBy?: TopBarOrderByWithAggregationInput | TopBarOrderByWithAggregationInput[]
    by: TopBarScalarFieldEnum[] | TopBarScalarFieldEnum
    having?: TopBarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopBarCountAggregateInputType | true
    _min?: TopBarMinAggregateInputType
    _max?: TopBarMaxAggregateInputType
  }

  export type TopBarGroupByOutputType = {
    id: string
    title: string
    link: string
    textColor: string
    backgroundColor: string | null
    createdAt: Date
    updatedAt: Date
    _count: TopBarCountAggregateOutputType | null
    _min: TopBarMinAggregateOutputType | null
    _max: TopBarMaxAggregateOutputType | null
  }

  type GetTopBarGroupByPayload<T extends TopBarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopBarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopBarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopBarGroupByOutputType[P]>
            : GetScalarType<T[P], TopBarGroupByOutputType[P]>
        }
      >
    >


  export type TopBarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    textColor?: boolean
    backgroundColor?: boolean
    button?: boolean | TopBarButtonDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["topBar"]>



  export type TopBarSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    textColor?: boolean
    backgroundColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopBarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "link" | "textColor" | "backgroundColor" | "button" | "createdAt" | "updatedAt", ExtArgs["result"]["topBar"]>
  export type TopBarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopBarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopBar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      link: string
      textColor: string
      backgroundColor: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topBar"]>
    composites: {
      button: Prisma.$TopBarButtonPayload | null
    }
  }

  type TopBarGetPayload<S extends boolean | null | undefined | TopBarDefaultArgs> = $Result.GetResult<Prisma.$TopBarPayload, S>

  type TopBarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopBarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopBarCountAggregateInputType | true
    }

  export interface TopBarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopBar'], meta: { name: 'TopBar' } }
    /**
     * Find zero or one TopBar that matches the filter.
     * @param {TopBarFindUniqueArgs} args - Arguments to find a TopBar
     * @example
     * // Get one TopBar
     * const topBar = await prisma.topBar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopBarFindUniqueArgs>(args: SelectSubset<T, TopBarFindUniqueArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopBar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopBarFindUniqueOrThrowArgs} args - Arguments to find a TopBar
     * @example
     * // Get one TopBar
     * const topBar = await prisma.topBar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopBarFindUniqueOrThrowArgs>(args: SelectSubset<T, TopBarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopBar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarFindFirstArgs} args - Arguments to find a TopBar
     * @example
     * // Get one TopBar
     * const topBar = await prisma.topBar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopBarFindFirstArgs>(args?: SelectSubset<T, TopBarFindFirstArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopBar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarFindFirstOrThrowArgs} args - Arguments to find a TopBar
     * @example
     * // Get one TopBar
     * const topBar = await prisma.topBar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopBarFindFirstOrThrowArgs>(args?: SelectSubset<T, TopBarFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopBars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopBars
     * const topBars = await prisma.topBar.findMany()
     * 
     * // Get first 10 TopBars
     * const topBars = await prisma.topBar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topBarWithIdOnly = await prisma.topBar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopBarFindManyArgs>(args?: SelectSubset<T, TopBarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopBar.
     * @param {TopBarCreateArgs} args - Arguments to create a TopBar.
     * @example
     * // Create one TopBar
     * const TopBar = await prisma.topBar.create({
     *   data: {
     *     // ... data to create a TopBar
     *   }
     * })
     * 
     */
    create<T extends TopBarCreateArgs>(args: SelectSubset<T, TopBarCreateArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopBars.
     * @param {TopBarCreateManyArgs} args - Arguments to create many TopBars.
     * @example
     * // Create many TopBars
     * const topBar = await prisma.topBar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopBarCreateManyArgs>(args?: SelectSubset<T, TopBarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TopBar.
     * @param {TopBarDeleteArgs} args - Arguments to delete one TopBar.
     * @example
     * // Delete one TopBar
     * const TopBar = await prisma.topBar.delete({
     *   where: {
     *     // ... filter to delete one TopBar
     *   }
     * })
     * 
     */
    delete<T extends TopBarDeleteArgs>(args: SelectSubset<T, TopBarDeleteArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopBar.
     * @param {TopBarUpdateArgs} args - Arguments to update one TopBar.
     * @example
     * // Update one TopBar
     * const topBar = await prisma.topBar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopBarUpdateArgs>(args: SelectSubset<T, TopBarUpdateArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopBars.
     * @param {TopBarDeleteManyArgs} args - Arguments to filter TopBars to delete.
     * @example
     * // Delete a few TopBars
     * const { count } = await prisma.topBar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopBarDeleteManyArgs>(args?: SelectSubset<T, TopBarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopBars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopBars
     * const topBar = await prisma.topBar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopBarUpdateManyArgs>(args: SelectSubset<T, TopBarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TopBar.
     * @param {TopBarUpsertArgs} args - Arguments to update or create a TopBar.
     * @example
     * // Update or create a TopBar
     * const topBar = await prisma.topBar.upsert({
     *   create: {
     *     // ... data to create a TopBar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopBar we want to update
     *   }
     * })
     */
    upsert<T extends TopBarUpsertArgs>(args: SelectSubset<T, TopBarUpsertArgs<ExtArgs>>): Prisma__TopBarClient<$Result.GetResult<Prisma.$TopBarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopBars that matches the filter.
     * @param {TopBarFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const topBar = await prisma.topBar.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TopBarFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TopBar.
     * @param {TopBarAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const topBar = await prisma.topBar.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TopBarAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TopBars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarCountArgs} args - Arguments to filter TopBars to count.
     * @example
     * // Count the number of TopBars
     * const count = await prisma.topBar.count({
     *   where: {
     *     // ... the filter for the TopBars we want to count
     *   }
     * })
    **/
    count<T extends TopBarCountArgs>(
      args?: Subset<T, TopBarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopBarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopBar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopBarAggregateArgs>(args: Subset<T, TopBarAggregateArgs>): Prisma.PrismaPromise<GetTopBarAggregateType<T>>

    /**
     * Group by TopBar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopBarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopBarGroupByArgs['orderBy'] }
        : { orderBy?: TopBarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopBarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopBarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopBar model
   */
  readonly fields: TopBarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopBar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopBarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopBar model
   */
  interface TopBarFieldRefs {
    readonly id: FieldRef<"TopBar", 'String'>
    readonly title: FieldRef<"TopBar", 'String'>
    readonly link: FieldRef<"TopBar", 'String'>
    readonly textColor: FieldRef<"TopBar", 'String'>
    readonly backgroundColor: FieldRef<"TopBar", 'String'>
    readonly createdAt: FieldRef<"TopBar", 'DateTime'>
    readonly updatedAt: FieldRef<"TopBar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TopBar findUnique
   */
  export type TopBarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * Filter, which TopBar to fetch.
     */
    where: TopBarWhereUniqueInput
  }

  /**
   * TopBar findUniqueOrThrow
   */
  export type TopBarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * Filter, which TopBar to fetch.
     */
    where: TopBarWhereUniqueInput
  }

  /**
   * TopBar findFirst
   */
  export type TopBarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * Filter, which TopBar to fetch.
     */
    where?: TopBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBars to fetch.
     */
    orderBy?: TopBarOrderByWithRelationInput | TopBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopBars.
     */
    cursor?: TopBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopBars.
     */
    distinct?: TopBarScalarFieldEnum | TopBarScalarFieldEnum[]
  }

  /**
   * TopBar findFirstOrThrow
   */
  export type TopBarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * Filter, which TopBar to fetch.
     */
    where?: TopBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBars to fetch.
     */
    orderBy?: TopBarOrderByWithRelationInput | TopBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopBars.
     */
    cursor?: TopBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopBars.
     */
    distinct?: TopBarScalarFieldEnum | TopBarScalarFieldEnum[]
  }

  /**
   * TopBar findMany
   */
  export type TopBarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * Filter, which TopBars to fetch.
     */
    where?: TopBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBars to fetch.
     */
    orderBy?: TopBarOrderByWithRelationInput | TopBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopBars.
     */
    cursor?: TopBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBars.
     */
    skip?: number
    distinct?: TopBarScalarFieldEnum | TopBarScalarFieldEnum[]
  }

  /**
   * TopBar create
   */
  export type TopBarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * The data needed to create a TopBar.
     */
    data: XOR<TopBarCreateInput, TopBarUncheckedCreateInput>
  }

  /**
   * TopBar createMany
   */
  export type TopBarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopBars.
     */
    data: TopBarCreateManyInput | TopBarCreateManyInput[]
  }

  /**
   * TopBar update
   */
  export type TopBarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * The data needed to update a TopBar.
     */
    data: XOR<TopBarUpdateInput, TopBarUncheckedUpdateInput>
    /**
     * Choose, which TopBar to update.
     */
    where: TopBarWhereUniqueInput
  }

  /**
   * TopBar updateMany
   */
  export type TopBarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopBars.
     */
    data: XOR<TopBarUpdateManyMutationInput, TopBarUncheckedUpdateManyInput>
    /**
     * Filter which TopBars to update
     */
    where?: TopBarWhereInput
    /**
     * Limit how many TopBars to update.
     */
    limit?: number
  }

  /**
   * TopBar upsert
   */
  export type TopBarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * The filter to search for the TopBar to update in case it exists.
     */
    where: TopBarWhereUniqueInput
    /**
     * In case the TopBar found by the `where` argument doesn't exist, create a new TopBar with this data.
     */
    create: XOR<TopBarCreateInput, TopBarUncheckedCreateInput>
    /**
     * In case the TopBar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopBarUpdateInput, TopBarUncheckedUpdateInput>
  }

  /**
   * TopBar delete
   */
  export type TopBarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
    /**
     * Filter which TopBar to delete.
     */
    where: TopBarWhereUniqueInput
  }

  /**
   * TopBar deleteMany
   */
  export type TopBarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopBars to delete
     */
    where?: TopBarWhereInput
    /**
     * Limit how many TopBars to delete.
     */
    limit?: number
  }

  /**
   * TopBar findRaw
   */
  export type TopBarFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TopBar aggregateRaw
   */
  export type TopBarAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TopBar without action
   */
  export type TopBarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBar
     */
    select?: TopBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBar
     */
    omit?: TopBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    role: 'role',
    defaultPaymentMethod: 'defaultPaymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    longDescription: 'longDescription',
    brand: 'brand',
    slug: 'slug',
    rating: 'rating',
    numReviews: 'numReviews',
    featured: 'featured',
    sku: 'sku',
    discount: 'discount',
    sold: 'sold',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    review: 'review',
    reviewCreatedAt: 'reviewCreatedAt',
    verified: 'verified',
    reviewById: 'reviewById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ProductReviewScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    reviewId: 'reviewId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const ProductSubCategoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    subCategoryId: 'subCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductSubCategoryScalarFieldEnum = (typeof ProductSubCategoryScalarFieldEnum)[keyof typeof ProductSubCategoryScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    cartTotal: 'cartTotal',
    totalAfterDiscount: 'totalAfterDiscount',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    paymentMethod: 'paymentMethod',
    total: 'total',
    status: 'status',
    totalBeforeDiscount: 'totalBeforeDiscount',
    couponApplied: 'couponApplied',
    shippingPrice: 'shippingPrice',
    taxPrice: 'taxPrice',
    isPaid: 'isPaid',
    totalSaved: 'totalSaved',
    razorpay_order_id: 'razorpay_order_id',
    razorpay_payment_id: 'razorpay_payment_id',
    paidAt: 'paidAt',
    deliveredAt: 'deliveredAt',
    isNew: 'isNew',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    coupon: 'coupon',
    startDate: 'startDate',
    endDate: 'endDate',
    discount: 'discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const HomeScreenOfferScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    type: 'type'
  };

  export type HomeScreenOfferScalarFieldEnum = (typeof HomeScreenOfferScalarFieldEnum)[keyof typeof HomeScreenOfferScalarFieldEnum]


  export const TopBarScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    textColor: 'textColor',
    backgroundColor: 'backgroundColor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopBarScalarFieldEnum = (typeof TopBarScalarFieldEnum)[keyof typeof TopBarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OfferType'
   */
  export type EnumOfferTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferType'>
    


  /**
   * Reference to a field of type 'OfferType[]'
   */
  export type ListEnumOfferTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    defaultPaymentMethod?: StringFilter<"User"> | string
    address?: XOR<AddressNullableCompositeFilter, AddressObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    defaultPaymentMethod?: SortOrder
    address?: AddressOrderByInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cart?: CartOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    defaultPaymentMethod?: StringFilter<"User"> | string
    address?: XOR<AddressNullableCompositeFilter, AddressObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    defaultPaymentMethod?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    longDescription?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    slug?: StringFilter<"Product"> | string
    benefits?: ProductBenefitCompositeListFilter | ProductBenefitObjectEqualityInput[]
    ingredients?: ProductIngredientCompositeListFilter | ProductIngredientObjectEqualityInput[]
    rating?: FloatFilter<"Product"> | number
    numReviews?: IntFilter<"Product"> | number
    featured?: BoolFilter<"Product"> | boolean
    sku?: StringFilter<"Product"> | string
    images?: ImageCompositeListFilter | ImageObjectEqualityInput[]
    sizes?: ProductSizeCompositeListFilter | ProductSizeObjectEqualityInput[]
    discount?: FloatNullableFilter<"Product"> | number | null
    sold?: IntNullableFilter<"Product"> | number | null
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    productSubCategories?: ProductSubCategoryListRelationFilter
    productReviews?: ProductReviewListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    benefits?: ProductBenefitOrderByCompositeAggregateInput
    ingredients?: ProductIngredientOrderByCompositeAggregateInput
    rating?: SortOrder
    numReviews?: SortOrder
    featured?: SortOrder
    sku?: SortOrder
    images?: ImageOrderByCompositeAggregateInput
    sizes?: ProductSizeOrderByCompositeAggregateInput
    discount?: SortOrder
    sold?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    productSubCategories?: ProductSubCategoryOrderByRelationAggregateInput
    productReviews?: ProductReviewOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    slug?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringFilter<"Product"> | string
    longDescription?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    benefits?: ProductBenefitCompositeListFilter | ProductBenefitObjectEqualityInput[]
    ingredients?: ProductIngredientCompositeListFilter | ProductIngredientObjectEqualityInput[]
    rating?: FloatFilter<"Product"> | number
    numReviews?: IntFilter<"Product"> | number
    featured?: BoolFilter<"Product"> | boolean
    images?: ImageCompositeListFilter | ImageObjectEqualityInput[]
    sizes?: ProductSizeCompositeListFilter | ProductSizeObjectEqualityInput[]
    discount?: FloatNullableFilter<"Product"> | number | null
    sold?: IntNullableFilter<"Product"> | number | null
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    productSubCategories?: ProductSubCategoryListRelationFilter
    productReviews?: ProductReviewListRelationFilter
  }, "id" | "title" | "slug" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    rating?: SortOrder
    numReviews?: SortOrder
    featured?: SortOrder
    sku?: SortOrder
    discount?: SortOrder
    sold?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    longDescription?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    slug?: StringWithAggregatesFilter<"Product"> | string
    rating?: FloatWithAggregatesFilter<"Product"> | number
    numReviews?: IntWithAggregatesFilter<"Product"> | number
    featured?: BoolWithAggregatesFilter<"Product"> | boolean
    sku?: StringWithAggregatesFilter<"Product"> | string
    discount?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    sold?: IntNullableWithAggregatesFilter<"Product"> | number | null
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    reviewCreatedAt?: DateTimeFilter<"Review"> | Date | string
    verified?: BoolFilter<"Review"> | boolean
    reviewById?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    productReviews?: ProductReviewListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    reviewCreatedAt?: SortOrder
    verified?: SortOrder
    reviewById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewBy?: UserOrderByWithRelationInput
    productReviews?: ProductReviewOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: FloatFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    reviewCreatedAt?: DateTimeFilter<"Review"> | Date | string
    verified?: BoolFilter<"Review"> | boolean
    reviewById?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    productReviews?: ProductReviewListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    reviewCreatedAt?: SortOrder
    verified?: SortOrder
    reviewById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    review?: StringWithAggregatesFilter<"Review"> | string
    reviewCreatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    verified?: BoolWithAggregatesFilter<"Review"> | boolean
    reviewById?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ProductReviewWhereInput = {
    AND?: ProductReviewWhereInput | ProductReviewWhereInput[]
    OR?: ProductReviewWhereInput[]
    NOT?: ProductReviewWhereInput | ProductReviewWhereInput[]
    id?: StringFilter<"ProductReview"> | string
    productId?: StringFilter<"ProductReview"> | string
    reviewId?: StringFilter<"ProductReview"> | string
    createdAt?: DateTimeFilter<"ProductReview"> | Date | string
    updatedAt?: DateTimeFilter<"ProductReview"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ProductReviewOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type ProductReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_reviewId?: ProductReviewProductIdReviewIdCompoundUniqueInput
    AND?: ProductReviewWhereInput | ProductReviewWhereInput[]
    OR?: ProductReviewWhereInput[]
    NOT?: ProductReviewWhereInput | ProductReviewWhereInput[]
    productId?: StringFilter<"ProductReview"> | string
    reviewId?: StringFilter<"ProductReview"> | string
    createdAt?: DateTimeFilter<"ProductReview"> | Date | string
    updatedAt?: DateTimeFilter<"ProductReview"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id" | "productId_reviewId">

  export type ProductReviewOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductReviewCountOrderByAggregateInput
    _max?: ProductReviewMaxOrderByAggregateInput
    _min?: ProductReviewMinOrderByAggregateInput
  }

  export type ProductReviewScalarWhereWithAggregatesInput = {
    AND?: ProductReviewScalarWhereWithAggregatesInput | ProductReviewScalarWhereWithAggregatesInput[]
    OR?: ProductReviewScalarWhereWithAggregatesInput[]
    NOT?: ProductReviewScalarWhereWithAggregatesInput | ProductReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductReview"> | string
    productId?: StringWithAggregatesFilter<"ProductReview"> | string
    reviewId?: StringWithAggregatesFilter<"ProductReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductReview"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    images?: ImageCompositeListFilter | ImageObjectEqualityInput[]
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
    subCategories?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    images?: ImageOrderByCompositeAggregateInput
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    subCategories?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    images?: ImageCompositeListFilter | ImageObjectEqualityInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
    subCategories?: SubCategoryListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    slug?: StringFilter<"SubCategory"> | string
    images?: SubCategoryImageCompositeListFilter | SubCategoryImageObjectEqualityInput[]
    parentId?: StringFilter<"SubCategory"> | string
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    parent?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    productSubCategories?: ProductSubCategoryListRelationFilter
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    images?: SubCategoryImageOrderByCompositeAggregateInput
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    productSubCategories?: ProductSubCategoryOrderByRelationAggregateInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    images?: SubCategoryImageCompositeListFilter | SubCategoryImageObjectEqualityInput[]
    parentId?: StringFilter<"SubCategory"> | string
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    parent?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    productSubCategories?: ProductSubCategoryListRelationFilter
  }, "id" | "name" | "slug">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubCategory"> | string
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    slug?: StringWithAggregatesFilter<"SubCategory"> | string
    parentId?: StringWithAggregatesFilter<"SubCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
  }

  export type ProductSubCategoryWhereInput = {
    AND?: ProductSubCategoryWhereInput | ProductSubCategoryWhereInput[]
    OR?: ProductSubCategoryWhereInput[]
    NOT?: ProductSubCategoryWhereInput | ProductSubCategoryWhereInput[]
    id?: StringFilter<"ProductSubCategory"> | string
    productId?: StringFilter<"ProductSubCategory"> | string
    subCategoryId?: StringFilter<"ProductSubCategory"> | string
    createdAt?: DateTimeFilter<"ProductSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSubCategory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
  }

  export type ProductSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    subCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    subCategory?: SubCategoryOrderByWithRelationInput
  }

  export type ProductSubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_subCategoryId?: ProductSubCategoryProductIdSubCategoryIdCompoundUniqueInput
    AND?: ProductSubCategoryWhereInput | ProductSubCategoryWhereInput[]
    OR?: ProductSubCategoryWhereInput[]
    NOT?: ProductSubCategoryWhereInput | ProductSubCategoryWhereInput[]
    productId?: StringFilter<"ProductSubCategory"> | string
    subCategoryId?: StringFilter<"ProductSubCategory"> | string
    createdAt?: DateTimeFilter<"ProductSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSubCategory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
  }, "id" | "productId_subCategoryId">

  export type ProductSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    subCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductSubCategoryCountOrderByAggregateInput
    _max?: ProductSubCategoryMaxOrderByAggregateInput
    _min?: ProductSubCategoryMinOrderByAggregateInput
  }

  export type ProductSubCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductSubCategoryScalarWhereWithAggregatesInput | ProductSubCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductSubCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductSubCategoryScalarWhereWithAggregatesInput | ProductSubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSubCategory"> | string
    productId?: StringWithAggregatesFilter<"ProductSubCategory"> | string
    subCategoryId?: StringWithAggregatesFilter<"ProductSubCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductSubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductSubCategory"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    products?: CartProductCompositeListFilter | CartProductObjectEqualityInput[]
    cartTotal?: FloatNullableFilter<"Cart"> | number | null
    totalAfterDiscount?: FloatNullableFilter<"Cart"> | number | null
    userId?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    products?: CartProductOrderByCompositeAggregateInput
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    products?: CartProductCompositeListFilter | CartProductObjectEqualityInput[]
    cartTotal?: FloatNullableFilter<"Cart"> | number | null
    totalAfterDiscount?: FloatNullableFilter<"Cart"> | number | null
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    cartTotal?: FloatNullableWithAggregatesFilter<"Cart"> | number | null
    totalAfterDiscount?: FloatNullableWithAggregatesFilter<"Cart"> | number | null
    userId?: StringWithAggregatesFilter<"Cart"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    products?: OrderProductCompositeListFilter | OrderProductObjectEqualityInput[]
    shippingAddress?: XOR<ShippingAddressNullableCompositeFilter, ShippingAddressObjectEqualityInput> | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentResult?: XOR<PaymentResultNullableCompositeFilter, PaymentResultObjectEqualityInput> | null
    total?: FloatFilter<"Order"> | number
    status?: StringNullableFilter<"Order"> | string | null
    totalBeforeDiscount?: FloatNullableFilter<"Order"> | number | null
    couponApplied?: StringNullableFilter<"Order"> | string | null
    shippingPrice?: FloatFilter<"Order"> | number
    taxPrice?: FloatNullableFilter<"Order"> | number | null
    isPaid?: BoolFilter<"Order"> | boolean
    totalSaved?: FloatNullableFilter<"Order"> | number | null
    razorpay_order_id?: StringNullableFilter<"Order"> | string | null
    razorpay_payment_id?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    isNew?: BoolFilter<"Order"> | boolean
    userId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    products?: OrderProductOrderByCompositeAggregateInput
    shippingAddress?: ShippingAddressOrderByInput
    paymentMethod?: SortOrder
    paymentResult?: PaymentResultOrderByInput
    total?: SortOrder
    status?: SortOrder
    totalBeforeDiscount?: SortOrder
    couponApplied?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    isPaid?: SortOrder
    totalSaved?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    isNew?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    products?: OrderProductCompositeListFilter | OrderProductObjectEqualityInput[]
    shippingAddress?: XOR<ShippingAddressNullableCompositeFilter, ShippingAddressObjectEqualityInput> | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentResult?: XOR<PaymentResultNullableCompositeFilter, PaymentResultObjectEqualityInput> | null
    total?: FloatFilter<"Order"> | number
    status?: StringNullableFilter<"Order"> | string | null
    totalBeforeDiscount?: FloatNullableFilter<"Order"> | number | null
    couponApplied?: StringNullableFilter<"Order"> | string | null
    shippingPrice?: FloatFilter<"Order"> | number
    taxPrice?: FloatNullableFilter<"Order"> | number | null
    isPaid?: BoolFilter<"Order"> | boolean
    totalSaved?: FloatNullableFilter<"Order"> | number | null
    razorpay_order_id?: StringNullableFilter<"Order"> | string | null
    razorpay_payment_id?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    isNew?: BoolFilter<"Order"> | boolean
    userId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    total?: SortOrder
    status?: SortOrder
    totalBeforeDiscount?: SortOrder
    couponApplied?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    isPaid?: SortOrder
    totalSaved?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    isNew?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Order"> | string | null
    total?: FloatWithAggregatesFilter<"Order"> | number
    status?: StringNullableWithAggregatesFilter<"Order"> | string | null
    totalBeforeDiscount?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    couponApplied?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingPrice?: FloatWithAggregatesFilter<"Order"> | number
    taxPrice?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    isPaid?: BoolWithAggregatesFilter<"Order"> | boolean
    totalSaved?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    razorpay_order_id?: StringNullableWithAggregatesFilter<"Order"> | string | null
    razorpay_payment_id?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    isNew?: BoolWithAggregatesFilter<"Order"> | boolean
    userId?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    coupon?: StringFilter<"Coupon"> | string
    startDate?: StringFilter<"Coupon"> | string
    endDate?: StringFilter<"Coupon"> | string
    discount?: FloatFilter<"Coupon"> | number
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    coupon?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coupon?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    startDate?: StringFilter<"Coupon"> | string
    endDate?: StringFilter<"Coupon"> | string
    discount?: FloatFilter<"Coupon"> | number
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
  }, "id" | "coupon">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    coupon?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    coupon?: StringWithAggregatesFilter<"Coupon"> | string
    startDate?: StringWithAggregatesFilter<"Coupon"> | string
    endDate?: StringWithAggregatesFilter<"Coupon"> | string
    discount?: FloatWithAggregatesFilter<"Coupon"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type HomeScreenOfferWhereInput = {
    AND?: HomeScreenOfferWhereInput | HomeScreenOfferWhereInput[]
    OR?: HomeScreenOfferWhereInput[]
    NOT?: HomeScreenOfferWhereInput | HomeScreenOfferWhereInput[]
    id?: StringFilter<"HomeScreenOffer"> | string
    title?: StringFilter<"HomeScreenOffer"> | string
    link?: StringFilter<"HomeScreenOffer"> | string
    type?: EnumOfferTypeFilter<"HomeScreenOffer"> | $Enums.OfferType
    images?: ImageCompositeListFilter | ImageObjectEqualityInput[]
  }

  export type HomeScreenOfferOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    type?: SortOrder
    images?: ImageOrderByCompositeAggregateInput
  }

  export type HomeScreenOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomeScreenOfferWhereInput | HomeScreenOfferWhereInput[]
    OR?: HomeScreenOfferWhereInput[]
    NOT?: HomeScreenOfferWhereInput | HomeScreenOfferWhereInput[]
    title?: StringFilter<"HomeScreenOffer"> | string
    link?: StringFilter<"HomeScreenOffer"> | string
    type?: EnumOfferTypeFilter<"HomeScreenOffer"> | $Enums.OfferType
    images?: ImageCompositeListFilter | ImageObjectEqualityInput[]
  }, "id">

  export type HomeScreenOfferOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    type?: SortOrder
    _count?: HomeScreenOfferCountOrderByAggregateInput
    _max?: HomeScreenOfferMaxOrderByAggregateInput
    _min?: HomeScreenOfferMinOrderByAggregateInput
  }

  export type HomeScreenOfferScalarWhereWithAggregatesInput = {
    AND?: HomeScreenOfferScalarWhereWithAggregatesInput | HomeScreenOfferScalarWhereWithAggregatesInput[]
    OR?: HomeScreenOfferScalarWhereWithAggregatesInput[]
    NOT?: HomeScreenOfferScalarWhereWithAggregatesInput | HomeScreenOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HomeScreenOffer"> | string
    title?: StringWithAggregatesFilter<"HomeScreenOffer"> | string
    link?: StringWithAggregatesFilter<"HomeScreenOffer"> | string
    type?: EnumOfferTypeWithAggregatesFilter<"HomeScreenOffer"> | $Enums.OfferType
  }

  export type TopBarWhereInput = {
    AND?: TopBarWhereInput | TopBarWhereInput[]
    OR?: TopBarWhereInput[]
    NOT?: TopBarWhereInput | TopBarWhereInput[]
    id?: StringFilter<"TopBar"> | string
    title?: StringFilter<"TopBar"> | string
    link?: StringFilter<"TopBar"> | string
    textColor?: StringFilter<"TopBar"> | string
    backgroundColor?: StringNullableFilter<"TopBar"> | string | null
    button?: XOR<TopBarButtonNullableCompositeFilter, TopBarButtonObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"TopBar"> | Date | string
    updatedAt?: DateTimeFilter<"TopBar"> | Date | string
  }

  export type TopBarOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    textColor?: SortOrder
    backgroundColor?: SortOrder
    button?: TopBarButtonOrderByInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopBarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopBarWhereInput | TopBarWhereInput[]
    OR?: TopBarWhereInput[]
    NOT?: TopBarWhereInput | TopBarWhereInput[]
    title?: StringFilter<"TopBar"> | string
    link?: StringFilter<"TopBar"> | string
    textColor?: StringFilter<"TopBar"> | string
    backgroundColor?: StringNullableFilter<"TopBar"> | string | null
    button?: XOR<TopBarButtonNullableCompositeFilter, TopBarButtonObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"TopBar"> | Date | string
    updatedAt?: DateTimeFilter<"TopBar"> | Date | string
  }, "id">

  export type TopBarOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    textColor?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopBarCountOrderByAggregateInput
    _max?: TopBarMaxOrderByAggregateInput
    _min?: TopBarMinOrderByAggregateInput
  }

  export type TopBarScalarWhereWithAggregatesInput = {
    AND?: TopBarScalarWhereWithAggregatesInput | TopBarScalarWhereWithAggregatesInput[]
    OR?: TopBarScalarWhereWithAggregatesInput[]
    NOT?: TopBarScalarWhereWithAggregatesInput | TopBarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopBar"> | string
    title?: StringWithAggregatesFilter<"TopBar"> | string
    link?: StringWithAggregatesFilter<"TopBar"> | string
    textColor?: StringWithAggregatesFilter<"TopBar"> | string
    backgroundColor?: StringNullableWithAggregatesFilter<"TopBar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TopBar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TopBar"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewByInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    productSubCategories?: ProductSubCategoryCreateNestedManyWithoutProductInput
    productReviews?: ProductReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryUncheckedCreateNestedManyWithoutProductInput
    productReviews?: ProductReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    productSubCategories?: ProductSubCategoryUpdateManyWithoutProductNestedInput
    productReviews?: ProductReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUncheckedUpdateManyWithoutProductNestedInput
    productReviews?: ProductReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewBy: UserCreateNestedOneWithoutReviewsInput
    productReviews?: ProductReviewCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    reviewById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productReviews?: ProductReviewUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewBy?: UserUpdateOneRequiredWithoutReviewsNestedInput
    productReviews?: ProductReviewUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    reviewById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productReviews?: ProductReviewUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    reviewById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    reviewById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductReviewsInput
    review: ReviewCreateNestedOneWithoutProductReviewsInput
  }

  export type ProductReviewUncheckedCreateInput = {
    id?: string
    productId: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductReviewUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductReviewsNestedInput
    review?: ReviewUpdateOneRequiredWithoutProductReviewsNestedInput
  }

  export type ProductReviewUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewCreateManyInput = {
    id?: string
    productId: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductReviewUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
    subCategories?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
    subCategories?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    subCategories?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parent: CategoryCreateNestedOneWithoutSubCategoriesInput
    productSubCategories?: ProductSubCategoryCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    productSubCategories?: ProductSubCategoryUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductSubCategoriesInput
    subCategory: SubCategoryCreateNestedOneWithoutProductSubCategoriesInput
  }

  export type ProductSubCategoryUncheckedCreateInput = {
    id?: string
    productId: string
    subCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSubCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductSubCategoriesNestedInput
    subCategory?: SubCategoryUpdateOneRequiredWithoutProductSubCategoriesNestedInput
  }

  export type ProductSubCategoryUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryCreateManyInput = {
    id?: string
    productId: string
    subCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSubCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    products?: XOR<CartProductListCreateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: number | null
    totalAfterDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    products?: XOR<CartProductListCreateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: number | null
    totalAfterDiscount?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateInput = {
    products?: XOR<CartProductListUpdateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    totalAfterDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    products?: XOR<CartProductListUpdateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    totalAfterDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateManyInput = {
    id?: string
    products?: XOR<CartProductListCreateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: number | null
    totalAfterDiscount?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    products?: XOR<CartProductListUpdateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    totalAfterDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    products?: XOR<CartProductListUpdateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    totalAfterDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    products?: XOR<OrderProductListCreateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableCreateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: string | null
    paymentResult?: XOR<PaymentResultNullableCreateEnvelopeInput, PaymentResultCreateInput> | null
    total: number
    status?: string | null
    totalBeforeDiscount?: number | null
    couponApplied?: string | null
    shippingPrice?: number
    taxPrice?: number | null
    isPaid?: boolean
    totalSaved?: number | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    isNew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    products?: XOR<OrderProductListCreateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableCreateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: string | null
    paymentResult?: XOR<PaymentResultNullableCreateEnvelopeInput, PaymentResultCreateInput> | null
    total: number
    status?: string | null
    totalBeforeDiscount?: number | null
    couponApplied?: string | null
    shippingPrice?: number
    taxPrice?: number | null
    isPaid?: boolean
    totalSaved?: number | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    isNew?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    products?: XOR<OrderProductListCreateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableCreateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: string | null
    paymentResult?: XOR<PaymentResultNullableCreateEnvelopeInput, PaymentResultCreateInput> | null
    total: number
    status?: string | null
    totalBeforeDiscount?: number | null
    couponApplied?: string | null
    shippingPrice?: number
    taxPrice?: number | null
    isPaid?: boolean
    totalSaved?: number | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    isNew?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    coupon: string
    startDate: string
    endDate: string
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    coupon: string
    startDate: string
    endDate: string
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateInput = {
    coupon?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateInput = {
    coupon?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    id?: string
    coupon: string
    startDate: string
    endDate: string
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    coupon?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    coupon?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeScreenOfferCreateInput = {
    id?: string
    title: string
    link: string
    type: $Enums.OfferType
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type HomeScreenOfferUncheckedCreateInput = {
    id?: string
    title: string
    link: string
    type: $Enums.OfferType
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type HomeScreenOfferUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumOfferTypeFieldUpdateOperationsInput | $Enums.OfferType
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type HomeScreenOfferUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumOfferTypeFieldUpdateOperationsInput | $Enums.OfferType
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type HomeScreenOfferCreateManyInput = {
    id?: string
    title: string
    link: string
    type: $Enums.OfferType
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type HomeScreenOfferUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumOfferTypeFieldUpdateOperationsInput | $Enums.OfferType
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type HomeScreenOfferUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumOfferTypeFieldUpdateOperationsInput | $Enums.OfferType
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
  }

  export type TopBarCreateInput = {
    id?: string
    title: string
    link: string
    textColor: string
    backgroundColor?: string | null
    button?: XOR<TopBarButtonNullableCreateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopBarUncheckedCreateInput = {
    id?: string
    title: string
    link: string
    textColor: string
    backgroundColor?: string | null
    button?: XOR<TopBarButtonNullableCreateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopBarUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    button?: XOR<TopBarButtonNullableUpdateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopBarUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    button?: XOR<TopBarButtonNullableUpdateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopBarCreateManyInput = {
    id?: string
    title: string
    link: string
    textColor: string
    backgroundColor?: string | null
    button?: XOR<TopBarButtonNullableCreateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopBarUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    button?: XOR<TopBarButtonNullableUpdateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopBarUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    button?: XOR<TopBarButtonNullableUpdateEnvelopeInput, TopBarButtonCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AddressNullableCompositeFilter = {
    equals?: AddressObjectEqualityInput | null
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
    isSet?: boolean
  }

  export type AddressObjectEqualityInput = {
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    active: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type AddressOrderByInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    active?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    defaultPaymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ProductBenefitCompositeListFilter = {
    equals?: ProductBenefitObjectEqualityInput[]
    every?: ProductBenefitWhereInput
    some?: ProductBenefitWhereInput
    none?: ProductBenefitWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProductBenefitObjectEqualityInput = {
    name: string
  }

  export type ProductIngredientCompositeListFilter = {
    equals?: ProductIngredientObjectEqualityInput[]
    every?: ProductIngredientWhereInput
    some?: ProductIngredientWhereInput
    none?: ProductIngredientWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProductIngredientObjectEqualityInput = {
    name: string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ImageCompositeListFilter = {
    equals?: ImageObjectEqualityInput[]
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ImageObjectEqualityInput = {
    url?: string | null
    public_id?: string | null
  }

  export type ProductSizeCompositeListFilter = {
    equals?: ProductSizeObjectEqualityInput[]
    every?: ProductSizeWhereInput
    some?: ProductSizeWhereInput
    none?: ProductSizeWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProductSizeObjectEqualityInput = {
    size: string
    qty: number
    price: number
    sold: number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductSubCategoryListRelationFilter = {
    every?: ProductSubCategoryWhereInput
    some?: ProductSubCategoryWhereInput
    none?: ProductSubCategoryWhereInput
  }

  export type ProductReviewListRelationFilter = {
    every?: ProductReviewWhereInput
    some?: ProductReviewWhereInput
    none?: ProductReviewWhereInput
  }

  export type ProductBenefitOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProductIngredientOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSizeOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    rating?: SortOrder
    numReviews?: SortOrder
    featured?: SortOrder
    sku?: SortOrder
    discount?: SortOrder
    sold?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    rating?: SortOrder
    numReviews?: SortOrder
    discount?: SortOrder
    sold?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    rating?: SortOrder
    numReviews?: SortOrder
    featured?: SortOrder
    sku?: SortOrder
    discount?: SortOrder
    sold?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    brand?: SortOrder
    slug?: SortOrder
    rating?: SortOrder
    numReviews?: SortOrder
    featured?: SortOrder
    sku?: SortOrder
    discount?: SortOrder
    sold?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    rating?: SortOrder
    numReviews?: SortOrder
    discount?: SortOrder
    sold?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    reviewCreatedAt?: SortOrder
    verified?: SortOrder
    reviewById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    reviewCreatedAt?: SortOrder
    verified?: SortOrder
    reviewById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    reviewCreatedAt?: SortOrder
    verified?: SortOrder
    reviewById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type ProductReviewProductIdReviewIdCompoundUniqueInput = {
    productId: string
    reviewId: string
  }

  export type ProductReviewCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductReviewMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    reviewId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryImageCompositeListFilter = {
    equals?: SubCategoryImageObjectEqualityInput[]
    every?: SubCategoryImageWhereInput
    some?: SubCategoryImageWhereInput
    none?: SubCategoryImageWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type SubCategoryImageObjectEqualityInput = {
    url?: string | null
    public_url?: string | null
  }

  export type SubCategoryImageOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryScalarRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type ProductSubCategoryProductIdSubCategoryIdCompoundUniqueInput = {
    productId: string
    subCategoryId: string
  }

  export type ProductSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    subCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    subCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    subCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartProductCompositeListFilter = {
    equals?: CartProductObjectEqualityInput[]
    every?: CartProductWhereInput
    some?: CartProductWhereInput
    none?: CartProductWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CartProductObjectEqualityInput = {
    productId: string
    name?: string | null
    vendor?: InputJsonValue | null
    image?: string | null
    size?: string | null
    qty?: string | null
    color?: ProductColorObjectEqualityInput | null
    price?: number | null
  }

  export type CartProductOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    cartTotal?: SortOrder
    totalAfterDiscount?: SortOrder
  }

  export type OrderProductCompositeListFilter = {
    equals?: OrderProductObjectEqualityInput[]
    every?: OrderProductWhereInput
    some?: OrderProductWhereInput
    none?: OrderProductWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type OrderProductObjectEqualityInput = {
    productId: string
    name?: string | null
    image?: string | null
    size?: string | null
    qty?: number | null
    price?: number | null
    productCompletedAt?: Date | string | null
  }

  export type ShippingAddressNullableCompositeFilter = {
    equals?: ShippingAddressObjectEqualityInput | null
    is?: ShippingAddressWhereInput | null
    isNot?: ShippingAddressWhereInput | null
    isSet?: boolean
  }

  export type ShippingAddressObjectEqualityInput = {
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
  }

  export type PaymentResultNullableCompositeFilter = {
    equals?: PaymentResultObjectEqualityInput | null
    is?: PaymentResultWhereInput | null
    isNot?: PaymentResultWhereInput | null
    isSet?: boolean
  }

  export type PaymentResultObjectEqualityInput = {
    id?: string | null
    status?: string | null
    email?: string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type OrderProductOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ShippingAddressOrderByInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
  }

  export type PaymentResultOrderByInput = {
    id?: SortOrder
    status?: SortOrder
    email?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    total?: SortOrder
    status?: SortOrder
    totalBeforeDiscount?: SortOrder
    couponApplied?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    isPaid?: SortOrder
    totalSaved?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    isNew?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
    totalBeforeDiscount?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    totalSaved?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    total?: SortOrder
    status?: SortOrder
    totalBeforeDiscount?: SortOrder
    couponApplied?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    isPaid?: SortOrder
    totalSaved?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    isNew?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    total?: SortOrder
    status?: SortOrder
    totalBeforeDiscount?: SortOrder
    couponApplied?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    isPaid?: SortOrder
    totalSaved?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    paidAt?: SortOrder
    deliveredAt?: SortOrder
    isNew?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
    totalBeforeDiscount?: SortOrder
    shippingPrice?: SortOrder
    taxPrice?: SortOrder
    totalSaved?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    coupon?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    discount?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    coupon?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    coupon?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    discount?: SortOrder
  }

  export type EnumOfferTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferType | EnumOfferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferTypeFilter<$PrismaModel> | $Enums.OfferType
  }

  export type HomeScreenOfferCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    type?: SortOrder
  }

  export type HomeScreenOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    type?: SortOrder
  }

  export type HomeScreenOfferMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    type?: SortOrder
  }

  export type EnumOfferTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferType | EnumOfferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferTypeWithAggregatesFilter<$PrismaModel> | $Enums.OfferType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferTypeFilter<$PrismaModel>
    _max?: NestedEnumOfferTypeFilter<$PrismaModel>
  }

  export type TopBarButtonNullableCompositeFilter = {
    equals?: TopBarButtonObjectEqualityInput | null
    is?: TopBarButtonWhereInput | null
    isNot?: TopBarButtonWhereInput | null
    isSet?: boolean
  }

  export type TopBarButtonObjectEqualityInput = {
    text?: string | null
    link?: string | null
    textColor: string
    backgroundColor: string
  }

  export type TopBarButtonOrderByInput = {
    text?: SortOrder
    link?: SortOrder
    textColor?: SortOrder
    backgroundColor?: SortOrder
  }

  export type TopBarCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    textColor?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopBarMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    textColor?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopBarMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    textColor?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressNullableCreateEnvelopeInput = {
    set?: AddressCreateInput | null
  }

  export type AddressCreateInput = {
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    active?: boolean
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewByInput = {
    create?: XOR<ReviewCreateWithoutReviewByInput, ReviewUncheckedCreateWithoutReviewByInput> | ReviewCreateWithoutReviewByInput[] | ReviewUncheckedCreateWithoutReviewByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewByInput | ReviewCreateOrConnectWithoutReviewByInput[]
    createMany?: ReviewCreateManyReviewByInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewByInput = {
    create?: XOR<ReviewCreateWithoutReviewByInput, ReviewUncheckedCreateWithoutReviewByInput> | ReviewCreateWithoutReviewByInput[] | ReviewUncheckedCreateWithoutReviewByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewByInput | ReviewCreateOrConnectWithoutReviewByInput[]
    createMany?: ReviewCreateManyReviewByInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AddressNullableUpdateEnvelopeInput = {
    set?: AddressCreateInput | null
    upsert?: AddressUpsertInput
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewByNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewByInput, ReviewUncheckedCreateWithoutReviewByInput> | ReviewCreateWithoutReviewByInput[] | ReviewUncheckedCreateWithoutReviewByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewByInput | ReviewCreateOrConnectWithoutReviewByInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewByInput | ReviewUpsertWithWhereUniqueWithoutReviewByInput[]
    createMany?: ReviewCreateManyReviewByInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewByInput | ReviewUpdateWithWhereUniqueWithoutReviewByInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewByInput | ReviewUpdateManyWithWhereWithoutReviewByInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewByNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewByInput, ReviewUncheckedCreateWithoutReviewByInput> | ReviewCreateWithoutReviewByInput[] | ReviewUncheckedCreateWithoutReviewByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewByInput | ReviewCreateOrConnectWithoutReviewByInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewByInput | ReviewUpsertWithWhereUniqueWithoutReviewByInput[]
    createMany?: ReviewCreateManyReviewByInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewByInput | ReviewUpdateWithWhereUniqueWithoutReviewByInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewByInput | ReviewUpdateManyWithWhereWithoutReviewByInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductBenefitListCreateEnvelopeInput = {
    set?: ProductBenefitCreateInput | ProductBenefitCreateInput[]
  }

  export type ProductBenefitCreateInput = {
    name: string
  }

  export type ProductIngredientListCreateEnvelopeInput = {
    set?: ProductIngredientCreateInput | ProductIngredientCreateInput[]
  }

  export type ProductIngredientCreateInput = {
    name: string
  }

  export type ImageListCreateEnvelopeInput = {
    set?: ImageCreateInput | ImageCreateInput[]
  }

  export type ImageCreateInput = {
    url?: string | null
    public_id?: string | null
  }

  export type ProductSizeListCreateEnvelopeInput = {
    set?: ProductSizeCreateInput | ProductSizeCreateInput[]
  }

  export type ProductSizeCreateInput = {
    size: string
    qty: number
    price: number
    sold?: number
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductSubCategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSubCategoryCreateWithoutProductInput, ProductSubCategoryUncheckedCreateWithoutProductInput> | ProductSubCategoryCreateWithoutProductInput[] | ProductSubCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutProductInput | ProductSubCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductSubCategoryCreateManyProductInputEnvelope
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
  }

  export type ProductReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductReviewCreateWithoutProductInput, ProductReviewUncheckedCreateWithoutProductInput> | ProductReviewCreateWithoutProductInput[] | ProductReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutProductInput | ProductReviewCreateOrConnectWithoutProductInput[]
    createMany?: ProductReviewCreateManyProductInputEnvelope
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
  }

  export type ProductSubCategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSubCategoryCreateWithoutProductInput, ProductSubCategoryUncheckedCreateWithoutProductInput> | ProductSubCategoryCreateWithoutProductInput[] | ProductSubCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutProductInput | ProductSubCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductSubCategoryCreateManyProductInputEnvelope
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
  }

  export type ProductReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductReviewCreateWithoutProductInput, ProductReviewUncheckedCreateWithoutProductInput> | ProductReviewCreateWithoutProductInput[] | ProductReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutProductInput | ProductReviewCreateOrConnectWithoutProductInput[]
    createMany?: ProductReviewCreateManyProductInputEnvelope
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ProductBenefitListUpdateEnvelopeInput = {
    set?: ProductBenefitCreateInput | ProductBenefitCreateInput[]
    push?: ProductBenefitCreateInput | ProductBenefitCreateInput[]
    updateMany?: ProductBenefitUpdateManyInput
    deleteMany?: ProductBenefitDeleteManyInput
  }

  export type ProductIngredientListUpdateEnvelopeInput = {
    set?: ProductIngredientCreateInput | ProductIngredientCreateInput[]
    push?: ProductIngredientCreateInput | ProductIngredientCreateInput[]
    updateMany?: ProductIngredientUpdateManyInput
    deleteMany?: ProductIngredientDeleteManyInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ImageListUpdateEnvelopeInput = {
    set?: ImageCreateInput | ImageCreateInput[]
    push?: ImageCreateInput | ImageCreateInput[]
    updateMany?: ImageUpdateManyInput
    deleteMany?: ImageDeleteManyInput
  }

  export type ProductSizeListUpdateEnvelopeInput = {
    set?: ProductSizeCreateInput | ProductSizeCreateInput[]
    push?: ProductSizeCreateInput | ProductSizeCreateInput[]
    updateMany?: ProductSizeUpdateManyInput
    deleteMany?: ProductSizeDeleteManyInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductSubCategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSubCategoryCreateWithoutProductInput, ProductSubCategoryUncheckedCreateWithoutProductInput> | ProductSubCategoryCreateWithoutProductInput[] | ProductSubCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutProductInput | ProductSubCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductSubCategoryUpsertWithWhereUniqueWithoutProductInput | ProductSubCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSubCategoryCreateManyProductInputEnvelope
    set?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    disconnect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    delete?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    update?: ProductSubCategoryUpdateWithWhereUniqueWithoutProductInput | ProductSubCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSubCategoryUpdateManyWithWhereWithoutProductInput | ProductSubCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSubCategoryScalarWhereInput | ProductSubCategoryScalarWhereInput[]
  }

  export type ProductReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductReviewCreateWithoutProductInput, ProductReviewUncheckedCreateWithoutProductInput> | ProductReviewCreateWithoutProductInput[] | ProductReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutProductInput | ProductReviewCreateOrConnectWithoutProductInput[]
    upsert?: ProductReviewUpsertWithWhereUniqueWithoutProductInput | ProductReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductReviewCreateManyProductInputEnvelope
    set?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    disconnect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    delete?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    update?: ProductReviewUpdateWithWhereUniqueWithoutProductInput | ProductReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductReviewUpdateManyWithWhereWithoutProductInput | ProductReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
  }

  export type ProductSubCategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSubCategoryCreateWithoutProductInput, ProductSubCategoryUncheckedCreateWithoutProductInput> | ProductSubCategoryCreateWithoutProductInput[] | ProductSubCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutProductInput | ProductSubCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductSubCategoryUpsertWithWhereUniqueWithoutProductInput | ProductSubCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSubCategoryCreateManyProductInputEnvelope
    set?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    disconnect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    delete?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    update?: ProductSubCategoryUpdateWithWhereUniqueWithoutProductInput | ProductSubCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSubCategoryUpdateManyWithWhereWithoutProductInput | ProductSubCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSubCategoryScalarWhereInput | ProductSubCategoryScalarWhereInput[]
  }

  export type ProductReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductReviewCreateWithoutProductInput, ProductReviewUncheckedCreateWithoutProductInput> | ProductReviewCreateWithoutProductInput[] | ProductReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutProductInput | ProductReviewCreateOrConnectWithoutProductInput[]
    upsert?: ProductReviewUpsertWithWhereUniqueWithoutProductInput | ProductReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductReviewCreateManyProductInputEnvelope
    set?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    disconnect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    delete?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    update?: ProductReviewUpdateWithWhereUniqueWithoutProductInput | ProductReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductReviewUpdateManyWithWhereWithoutProductInput | ProductReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductReviewCreateNestedManyWithoutReviewInput = {
    create?: XOR<ProductReviewCreateWithoutReviewInput, ProductReviewUncheckedCreateWithoutReviewInput> | ProductReviewCreateWithoutReviewInput[] | ProductReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutReviewInput | ProductReviewCreateOrConnectWithoutReviewInput[]
    createMany?: ProductReviewCreateManyReviewInputEnvelope
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
  }

  export type ProductReviewUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ProductReviewCreateWithoutReviewInput, ProductReviewUncheckedCreateWithoutReviewInput> | ProductReviewCreateWithoutReviewInput[] | ProductReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutReviewInput | ProductReviewCreateOrConnectWithoutReviewInput[]
    createMany?: ProductReviewCreateManyReviewInputEnvelope
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductReviewUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ProductReviewCreateWithoutReviewInput, ProductReviewUncheckedCreateWithoutReviewInput> | ProductReviewCreateWithoutReviewInput[] | ProductReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutReviewInput | ProductReviewCreateOrConnectWithoutReviewInput[]
    upsert?: ProductReviewUpsertWithWhereUniqueWithoutReviewInput | ProductReviewUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ProductReviewCreateManyReviewInputEnvelope
    set?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    disconnect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    delete?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    update?: ProductReviewUpdateWithWhereUniqueWithoutReviewInput | ProductReviewUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ProductReviewUpdateManyWithWhereWithoutReviewInput | ProductReviewUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
  }

  export type ProductReviewUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ProductReviewCreateWithoutReviewInput, ProductReviewUncheckedCreateWithoutReviewInput> | ProductReviewCreateWithoutReviewInput[] | ProductReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutReviewInput | ProductReviewCreateOrConnectWithoutReviewInput[]
    upsert?: ProductReviewUpsertWithWhereUniqueWithoutReviewInput | ProductReviewUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ProductReviewCreateManyReviewInputEnvelope
    set?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    disconnect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    delete?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    update?: ProductReviewUpdateWithWhereUniqueWithoutReviewInput | ProductReviewUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ProductReviewUpdateManyWithWhereWithoutReviewInput | ProductReviewUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductReviewsInput = {
    create?: XOR<ProductCreateWithoutProductReviewsInput, ProductUncheckedCreateWithoutProductReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutProductReviewsInput = {
    create?: XOR<ReviewCreateWithoutProductReviewsInput, ReviewUncheckedCreateWithoutProductReviewsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutProductReviewsInput
    connect?: ReviewWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutProductReviewsInput, ProductUncheckedCreateWithoutProductReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductReviewsInput
    upsert?: ProductUpsertWithoutProductReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductReviewsInput, ProductUpdateWithoutProductReviewsInput>, ProductUncheckedUpdateWithoutProductReviewsInput>
  }

  export type ReviewUpdateOneRequiredWithoutProductReviewsNestedInput = {
    create?: XOR<ReviewCreateWithoutProductReviewsInput, ReviewUncheckedCreateWithoutProductReviewsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutProductReviewsInput
    upsert?: ReviewUpsertWithoutProductReviewsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutProductReviewsInput, ReviewUpdateWithoutProductReviewsInput>, ReviewUncheckedUpdateWithoutProductReviewsInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentInput | SubCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentInput | SubCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentInput | SubCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput> | SubCategoryCreateWithoutParentInput[] | SubCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutParentInput | SubCategoryCreateOrConnectWithoutParentInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutParentInput | SubCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubCategoryCreateManyParentInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutParentInput | SubCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutParentInput | SubCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type SubCategoryImageListCreateEnvelopeInput = {
    set?: SubCategoryImageCreateInput | SubCategoryImageCreateInput[]
  }

  export type SubCategoryImageCreateInput = {
    url?: string | null
    public_url?: string | null
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductSubCategoryCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductSubCategoryCreateWithoutSubCategoryInput, ProductSubCategoryUncheckedCreateWithoutSubCategoryInput> | ProductSubCategoryCreateWithoutSubCategoryInput[] | ProductSubCategoryUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutSubCategoryInput | ProductSubCategoryCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductSubCategoryCreateManySubCategoryInputEnvelope
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
  }

  export type ProductSubCategoryUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProductSubCategoryCreateWithoutSubCategoryInput, ProductSubCategoryUncheckedCreateWithoutSubCategoryInput> | ProductSubCategoryCreateWithoutSubCategoryInput[] | ProductSubCategoryUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutSubCategoryInput | ProductSubCategoryCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProductSubCategoryCreateManySubCategoryInputEnvelope
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
  }

  export type SubCategoryImageListUpdateEnvelopeInput = {
    set?: SubCategoryImageCreateInput | SubCategoryImageCreateInput[]
    push?: SubCategoryImageCreateInput | SubCategoryImageCreateInput[]
    updateMany?: SubCategoryImageUpdateManyInput
    deleteMany?: SubCategoryImageDeleteManyInput
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProductSubCategoryUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductSubCategoryCreateWithoutSubCategoryInput, ProductSubCategoryUncheckedCreateWithoutSubCategoryInput> | ProductSubCategoryCreateWithoutSubCategoryInput[] | ProductSubCategoryUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutSubCategoryInput | ProductSubCategoryCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductSubCategoryUpsertWithWhereUniqueWithoutSubCategoryInput | ProductSubCategoryUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductSubCategoryCreateManySubCategoryInputEnvelope
    set?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    disconnect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    delete?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    update?: ProductSubCategoryUpdateWithWhereUniqueWithoutSubCategoryInput | ProductSubCategoryUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductSubCategoryUpdateManyWithWhereWithoutSubCategoryInput | ProductSubCategoryUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductSubCategoryScalarWhereInput | ProductSubCategoryScalarWhereInput[]
  }

  export type ProductSubCategoryUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProductSubCategoryCreateWithoutSubCategoryInput, ProductSubCategoryUncheckedCreateWithoutSubCategoryInput> | ProductSubCategoryCreateWithoutSubCategoryInput[] | ProductSubCategoryUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProductSubCategoryCreateOrConnectWithoutSubCategoryInput | ProductSubCategoryCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProductSubCategoryUpsertWithWhereUniqueWithoutSubCategoryInput | ProductSubCategoryUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProductSubCategoryCreateManySubCategoryInputEnvelope
    set?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    disconnect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    delete?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    connect?: ProductSubCategoryWhereUniqueInput | ProductSubCategoryWhereUniqueInput[]
    update?: ProductSubCategoryUpdateWithWhereUniqueWithoutSubCategoryInput | ProductSubCategoryUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProductSubCategoryUpdateManyWithWhereWithoutSubCategoryInput | ProductSubCategoryUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProductSubCategoryScalarWhereInput | ProductSubCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductSubCategoriesInput = {
    create?: XOR<ProductCreateWithoutProductSubCategoriesInput, ProductUncheckedCreateWithoutProductSubCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductSubCategoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type SubCategoryCreateNestedOneWithoutProductSubCategoriesInput = {
    create?: XOR<SubCategoryCreateWithoutProductSubCategoriesInput, SubCategoryUncheckedCreateWithoutProductSubCategoriesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductSubCategoriesInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductSubCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutProductSubCategoriesInput, ProductUncheckedCreateWithoutProductSubCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductSubCategoriesInput
    upsert?: ProductUpsertWithoutProductSubCategoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductSubCategoriesInput, ProductUpdateWithoutProductSubCategoriesInput>, ProductUncheckedUpdateWithoutProductSubCategoriesInput>
  }

  export type SubCategoryUpdateOneRequiredWithoutProductSubCategoriesNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProductSubCategoriesInput, SubCategoryUncheckedCreateWithoutProductSubCategoriesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProductSubCategoriesInput
    upsert?: SubCategoryUpsertWithoutProductSubCategoriesInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutProductSubCategoriesInput, SubCategoryUpdateWithoutProductSubCategoriesInput>, SubCategoryUncheckedUpdateWithoutProductSubCategoriesInput>
  }

  export type CartProductListCreateEnvelopeInput = {
    set?: CartProductCreateInput | CartProductCreateInput[]
  }

  export type CartProductCreateInput = {
    productId: string
    name?: string | null
    vendor?: InputJsonValue | null
    image?: string | null
    size?: string | null
    qty?: string | null
    color?: ProductColorCreateInput | null
    price?: number | null
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartProductListUpdateEnvelopeInput = {
    set?: CartProductCreateInput | CartProductCreateInput[]
    push?: CartProductCreateInput | CartProductCreateInput[]
    updateMany?: CartProductUpdateManyInput
    deleteMany?: CartProductDeleteManyInput
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type OrderProductListCreateEnvelopeInput = {
    set?: OrderProductCreateInput | OrderProductCreateInput[]
  }

  export type OrderProductCreateInput = {
    productId: string
    name?: string | null
    image?: string | null
    size?: string | null
    qty?: number | null
    price?: number | null
    productCompletedAt?: Date | string | null
  }

  export type ShippingAddressNullableCreateEnvelopeInput = {
    set?: ShippingAddressCreateInput | null
  }

  export type ShippingAddressCreateInput = {
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
  }

  export type PaymentResultNullableCreateEnvelopeInput = {
    set?: PaymentResultCreateInput | null
  }

  export type PaymentResultCreateInput = {
    id?: string | null
    status?: string | null
    email?: string | null
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderProductListUpdateEnvelopeInput = {
    set?: OrderProductCreateInput | OrderProductCreateInput[]
    push?: OrderProductCreateInput | OrderProductCreateInput[]
    updateMany?: OrderProductUpdateManyInput
    deleteMany?: OrderProductDeleteManyInput
  }

  export type ShippingAddressNullableUpdateEnvelopeInput = {
    set?: ShippingAddressCreateInput | null
    upsert?: ShippingAddressUpsertInput
    unset?: boolean
  }

  export type PaymentResultNullableUpdateEnvelopeInput = {
    set?: PaymentResultCreateInput | null
    upsert?: PaymentResultUpsertInput
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type EnumOfferTypeFieldUpdateOperationsInput = {
    set?: $Enums.OfferType
  }

  export type TopBarButtonNullableCreateEnvelopeInput = {
    set?: TopBarButtonCreateInput | null
  }

  export type TopBarButtonCreateInput = {
    text?: string | null
    link?: string | null
    textColor: string
    backgroundColor: string
  }

  export type TopBarButtonNullableUpdateEnvelopeInput = {
    set?: TopBarButtonCreateInput | null
    upsert?: TopBarButtonUpsertInput
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    firstName?: StringNullableFilter<"Address"> | string | null
    lastName?: StringNullableFilter<"Address"> | string | null
    phoneNumber?: StringNullableFilter<"Address"> | string | null
    address1?: StringNullableFilter<"Address"> | string | null
    address2?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    active?: BoolFilter<"Address"> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type ProductBenefitWhereInput = {
    AND?: ProductBenefitWhereInput | ProductBenefitWhereInput[]
    OR?: ProductBenefitWhereInput[]
    NOT?: ProductBenefitWhereInput | ProductBenefitWhereInput[]
    name?: StringFilter<"ProductBenefit"> | string
  }

  export type ProductIngredientWhereInput = {
    AND?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    OR?: ProductIngredientWhereInput[]
    NOT?: ProductIngredientWhereInput | ProductIngredientWhereInput[]
    name?: StringFilter<"ProductIngredient"> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringNullableFilter<"Image"> | string | null
    public_id?: StringNullableFilter<"Image"> | string | null
  }

  export type ProductSizeWhereInput = {
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    size?: StringFilter<"ProductSize"> | string
    qty?: IntFilter<"ProductSize"> | number
    price?: FloatFilter<"ProductSize"> | number
    sold?: IntFilter<"ProductSize"> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SubCategoryImageWhereInput = {
    AND?: SubCategoryImageWhereInput | SubCategoryImageWhereInput[]
    OR?: SubCategoryImageWhereInput[]
    NOT?: SubCategoryImageWhereInput | SubCategoryImageWhereInput[]
    url?: StringNullableFilter<"SubCategoryImage"> | string | null
    public_url?: StringNullableFilter<"SubCategoryImage"> | string | null
  }

  export type CartProductWhereInput = {
    AND?: CartProductWhereInput | CartProductWhereInput[]
    OR?: CartProductWhereInput[]
    NOT?: CartProductWhereInput | CartProductWhereInput[]
    productId?: StringFilter<"CartProduct"> | string
    name?: StringNullableFilter<"CartProduct"> | string | null
    vendor?: JsonNullableFilter<"CartProduct">
    image?: StringNullableFilter<"CartProduct"> | string | null
    size?: StringNullableFilter<"CartProduct"> | string | null
    qty?: StringNullableFilter<"CartProduct"> | string | null
    color?: XOR<ProductColorNullableCompositeFilter, ProductColorObjectEqualityInput> | null
    price?: FloatNullableFilter<"CartProduct"> | number | null
  }

  export type ProductColorObjectEqualityInput = {
    color?: string | null
    image?: string | null
  }

  export type OrderProductWhereInput = {
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    productId?: StringFilter<"OrderProduct"> | string
    name?: StringNullableFilter<"OrderProduct"> | string | null
    image?: StringNullableFilter<"OrderProduct"> | string | null
    size?: StringNullableFilter<"OrderProduct"> | string | null
    qty?: IntNullableFilter<"OrderProduct"> | number | null
    price?: FloatNullableFilter<"OrderProduct"> | number | null
    productCompletedAt?: DateTimeNullableFilter<"OrderProduct"> | Date | string | null
  }

  export type ShippingAddressWhereInput = {
    AND?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    OR?: ShippingAddressWhereInput[]
    NOT?: ShippingAddressWhereInput | ShippingAddressWhereInput[]
    firstName?: StringNullableFilter<"ShippingAddress"> | string | null
    lastName?: StringNullableFilter<"ShippingAddress"> | string | null
    phoneNumber?: StringNullableFilter<"ShippingAddress"> | string | null
    address1?: StringNullableFilter<"ShippingAddress"> | string | null
    address2?: StringNullableFilter<"ShippingAddress"> | string | null
    city?: StringNullableFilter<"ShippingAddress"> | string | null
    state?: StringNullableFilter<"ShippingAddress"> | string | null
    zipCode?: StringNullableFilter<"ShippingAddress"> | string | null
    country?: StringNullableFilter<"ShippingAddress"> | string | null
  }

  export type PaymentResultWhereInput = {
    AND?: PaymentResultWhereInput | PaymentResultWhereInput[]
    OR?: PaymentResultWhereInput[]
    NOT?: PaymentResultWhereInput | PaymentResultWhereInput[]
    id?: StringNullableFilter<"PaymentResult"> | string | null
    status?: StringNullableFilter<"PaymentResult"> | string | null
    email?: StringNullableFilter<"PaymentResult"> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumOfferTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferType | EnumOfferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferTypeFilter<$PrismaModel> | $Enums.OfferType
  }

  export type NestedEnumOfferTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferType | EnumOfferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferType[] | ListEnumOfferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferTypeWithAggregatesFilter<$PrismaModel> | $Enums.OfferType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferTypeFilter<$PrismaModel>
    _max?: NestedEnumOfferTypeFilter<$PrismaModel>
  }

  export type TopBarButtonWhereInput = {
    AND?: TopBarButtonWhereInput | TopBarButtonWhereInput[]
    OR?: TopBarButtonWhereInput[]
    NOT?: TopBarButtonWhereInput | TopBarButtonWhereInput[]
    text?: StringNullableFilter<"TopBarButton"> | string | null
    link?: StringNullableFilter<"TopBarButton"> | string | null
    textColor?: StringFilter<"TopBarButton"> | string
    backgroundColor?: StringFilter<"TopBarButton"> | string
  }

  export type CartCreateWithoutUserInput = {
    id?: string
    products?: XOR<CartProductListCreateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: number | null
    totalAfterDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string
    products?: XOR<CartProductListCreateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: number | null
    totalAfterDiscount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    products?: XOR<OrderProductListCreateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableCreateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: string | null
    paymentResult?: XOR<PaymentResultNullableCreateEnvelopeInput, PaymentResultCreateInput> | null
    total: number
    status?: string | null
    totalBeforeDiscount?: number | null
    couponApplied?: string | null
    shippingPrice?: number
    taxPrice?: number | null
    isPaid?: boolean
    totalSaved?: number | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    isNew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    products?: XOR<OrderProductListCreateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableCreateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: string | null
    paymentResult?: XOR<PaymentResultNullableCreateEnvelopeInput, PaymentResultCreateInput> | null
    total: number
    status?: string | null
    totalBeforeDiscount?: number | null
    couponApplied?: string | null
    shippingPrice?: number
    taxPrice?: number | null
    isPaid?: boolean
    totalSaved?: number | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    isNew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
  }

  export type ReviewCreateWithoutReviewByInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productReviews?: ProductReviewCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutReviewByInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productReviews?: ProductReviewUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutReviewByInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewByInput, ReviewUncheckedCreateWithoutReviewByInput>
  }

  export type ReviewCreateManyReviewByInputEnvelope = {
    data: ReviewCreateManyReviewByInput | ReviewCreateManyReviewByInput[]
  }

  export type AddressUpsertInput = {
    set: AddressCreateInput | null
    update: AddressUpdateInput
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    products?: XOR<CartProductListUpdateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    totalAfterDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    products?: XOR<CartProductListUpdateEnvelopeInput, CartProductCreateInput> | CartProductCreateInput[]
    cartTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    totalAfterDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    total?: FloatFilter<"Order"> | number
    status?: StringNullableFilter<"Order"> | string | null
    totalBeforeDiscount?: FloatNullableFilter<"Order"> | number | null
    couponApplied?: StringNullableFilter<"Order"> | string | null
    shippingPrice?: FloatFilter<"Order"> | number
    taxPrice?: FloatNullableFilter<"Order"> | number | null
    isPaid?: BoolFilter<"Order"> | boolean
    totalSaved?: FloatNullableFilter<"Order"> | number | null
    razorpay_order_id?: StringNullableFilter<"Order"> | string | null
    razorpay_payment_id?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    isNew?: BoolFilter<"Order"> | boolean
    userId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewByInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewByInput, ReviewUncheckedUpdateWithoutReviewByInput>
    create: XOR<ReviewCreateWithoutReviewByInput, ReviewUncheckedCreateWithoutReviewByInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewByInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewByInput, ReviewUncheckedUpdateWithoutReviewByInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewByInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewByInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    reviewCreatedAt?: DateTimeFilter<"Review"> | Date | string
    verified?: BoolFilter<"Review"> | boolean
    reviewById?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: SubCategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductSubCategoryCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory: SubCategoryCreateNestedOneWithoutProductSubCategoriesInput
  }

  export type ProductSubCategoryUncheckedCreateWithoutProductInput = {
    id?: string
    subCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSubCategoryCreateOrConnectWithoutProductInput = {
    where: ProductSubCategoryWhereUniqueInput
    create: XOR<ProductSubCategoryCreateWithoutProductInput, ProductSubCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductSubCategoryCreateManyProductInputEnvelope = {
    data: ProductSubCategoryCreateManyProductInput | ProductSubCategoryCreateManyProductInput[]
  }

  export type ProductReviewCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutProductReviewsInput
  }

  export type ProductReviewUncheckedCreateWithoutProductInput = {
    id?: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductReviewCreateOrConnectWithoutProductInput = {
    where: ProductReviewWhereUniqueInput
    create: XOR<ProductReviewCreateWithoutProductInput, ProductReviewUncheckedCreateWithoutProductInput>
  }

  export type ProductReviewCreateManyProductInputEnvelope = {
    data: ProductReviewCreateManyProductInput | ProductReviewCreateManyProductInput[]
  }

  export type ProductBenefitUpdateManyInput = {
    where: ProductBenefitWhereInput
    data: ProductBenefitUpdateInput
  }

  export type ProductBenefitDeleteManyInput = {
    where: ProductBenefitWhereInput
  }

  export type ProductIngredientUpdateManyInput = {
    where: ProductIngredientWhereInput
    data: ProductIngredientUpdateInput
  }

  export type ProductIngredientDeleteManyInput = {
    where: ProductIngredientWhereInput
  }

  export type ImageUpdateManyInput = {
    where: ImageWhereInput
    data: ImageUpdateInput
  }

  export type ImageDeleteManyInput = {
    where: ImageWhereInput
  }

  export type ProductSizeUpdateManyInput = {
    where: ProductSizeWhereInput
    data: ProductSizeUpdateInput
  }

  export type ProductSizeDeleteManyInput = {
    where: ProductSizeWhereInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProductSubCategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSubCategoryWhereUniqueInput
    update: XOR<ProductSubCategoryUpdateWithoutProductInput, ProductSubCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSubCategoryCreateWithoutProductInput, ProductSubCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductSubCategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSubCategoryWhereUniqueInput
    data: XOR<ProductSubCategoryUpdateWithoutProductInput, ProductSubCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductSubCategoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductSubCategoryScalarWhereInput
    data: XOR<ProductSubCategoryUpdateManyMutationInput, ProductSubCategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSubCategoryScalarWhereInput = {
    AND?: ProductSubCategoryScalarWhereInput | ProductSubCategoryScalarWhereInput[]
    OR?: ProductSubCategoryScalarWhereInput[]
    NOT?: ProductSubCategoryScalarWhereInput | ProductSubCategoryScalarWhereInput[]
    id?: StringFilter<"ProductSubCategory"> | string
    productId?: StringFilter<"ProductSubCategory"> | string
    subCategoryId?: StringFilter<"ProductSubCategory"> | string
    createdAt?: DateTimeFilter<"ProductSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSubCategory"> | Date | string
  }

  export type ProductReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductReviewWhereUniqueInput
    update: XOR<ProductReviewUpdateWithoutProductInput, ProductReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ProductReviewCreateWithoutProductInput, ProductReviewUncheckedCreateWithoutProductInput>
  }

  export type ProductReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductReviewWhereUniqueInput
    data: XOR<ProductReviewUpdateWithoutProductInput, ProductReviewUncheckedUpdateWithoutProductInput>
  }

  export type ProductReviewUpdateManyWithWhereWithoutProductInput = {
    where: ProductReviewScalarWhereInput
    data: XOR<ProductReviewUpdateManyMutationInput, ProductReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductReviewScalarWhereInput = {
    AND?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
    OR?: ProductReviewScalarWhereInput[]
    NOT?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
    id?: StringFilter<"ProductReview"> | string
    productId?: StringFilter<"ProductReview"> | string
    reviewId?: StringFilter<"ProductReview"> | string
    createdAt?: DateTimeFilter<"ProductReview"> | Date | string
    updatedAt?: DateTimeFilter<"ProductReview"> | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductReviewCreateWithoutReviewInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductReviewsInput
  }

  export type ProductReviewUncheckedCreateWithoutReviewInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductReviewCreateOrConnectWithoutReviewInput = {
    where: ProductReviewWhereUniqueInput
    create: XOR<ProductReviewCreateWithoutReviewInput, ProductReviewUncheckedCreateWithoutReviewInput>
  }

  export type ProductReviewCreateManyReviewInputEnvelope = {
    data: ProductReviewCreateManyReviewInput | ProductReviewCreateManyReviewInput[]
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductReviewUpsertWithWhereUniqueWithoutReviewInput = {
    where: ProductReviewWhereUniqueInput
    update: XOR<ProductReviewUpdateWithoutReviewInput, ProductReviewUncheckedUpdateWithoutReviewInput>
    create: XOR<ProductReviewCreateWithoutReviewInput, ProductReviewUncheckedCreateWithoutReviewInput>
  }

  export type ProductReviewUpdateWithWhereUniqueWithoutReviewInput = {
    where: ProductReviewWhereUniqueInput
    data: XOR<ProductReviewUpdateWithoutReviewInput, ProductReviewUncheckedUpdateWithoutReviewInput>
  }

  export type ProductReviewUpdateManyWithWhereWithoutReviewInput = {
    where: ProductReviewScalarWhereInput
    data: XOR<ProductReviewUpdateManyMutationInput, ProductReviewUncheckedUpdateManyWithoutReviewInput>
  }

  export type ProductCreateWithoutProductReviewsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    productSubCategories?: ProductSubCategoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductReviewsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductReviewsInput, ProductUncheckedCreateWithoutProductReviewsInput>
  }

  export type ReviewCreateWithoutProductReviewsInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewBy: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductReviewsInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    reviewById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProductReviewsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductReviewsInput, ReviewUncheckedCreateWithoutProductReviewsInput>
  }

  export type ProductUpsertWithoutProductReviewsInput = {
    update: XOR<ProductUpdateWithoutProductReviewsInput, ProductUncheckedUpdateWithoutProductReviewsInput>
    create: XOR<ProductCreateWithoutProductReviewsInput, ProductUncheckedCreateWithoutProductReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductReviewsInput, ProductUncheckedUpdateWithoutProductReviewsInput>
  }

  export type ProductUpdateWithoutProductReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    productSubCategories?: ProductSubCategoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ReviewUpsertWithoutProductReviewsInput = {
    update: XOR<ReviewUpdateWithoutProductReviewsInput, ReviewUncheckedUpdateWithoutProductReviewsInput>
    create: XOR<ReviewCreateWithoutProductReviewsInput, ReviewUncheckedCreateWithoutProductReviewsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutProductReviewsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutProductReviewsInput, ReviewUncheckedUpdateWithoutProductReviewsInput>
  }

  export type ReviewUpdateWithoutProductReviewsInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewBy?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductReviewsInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    reviewById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryCreateNestedManyWithoutProductInput
    productReviews?: ProductReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryUncheckedCreateNestedManyWithoutProductInput
    productReviews?: ProductReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type SubCategoryCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    productSubCategories?: ProductSubCategoryUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutParentInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput>
  }

  export type SubCategoryCreateManyParentInputEnvelope = {
    data: SubCategoryCreateManyParentInput | SubCategoryCreateManyParentInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    longDescription?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    slug?: StringFilter<"Product"> | string
    rating?: FloatFilter<"Product"> | number
    numReviews?: IntFilter<"Product"> | number
    featured?: BoolFilter<"Product"> | boolean
    sku?: StringFilter<"Product"> | string
    discount?: FloatNullableFilter<"Product"> | number | null
    sold?: IntNullableFilter<"Product"> | number | null
    categoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutParentInput, SubCategoryUncheckedUpdateWithoutParentInput>
    create: XOR<SubCategoryCreateWithoutParentInput, SubCategoryUncheckedCreateWithoutParentInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutParentInput, SubCategoryUncheckedUpdateWithoutParentInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutParentInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    slug?: StringFilter<"SubCategory"> | string
    parentId?: StringFilter<"SubCategory"> | string
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type ProductSubCategoryCreateWithoutSubCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductSubCategoriesInput
  }

  export type ProductSubCategoryUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSubCategoryCreateOrConnectWithoutSubCategoryInput = {
    where: ProductSubCategoryWhereUniqueInput
    create: XOR<ProductSubCategoryCreateWithoutSubCategoryInput, ProductSubCategoryUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductSubCategoryCreateManySubCategoryInputEnvelope = {
    data: ProductSubCategoryCreateManySubCategoryInput | ProductSubCategoryCreateManySubCategoryInput[]
  }

  export type SubCategoryImageUpdateManyInput = {
    where: SubCategoryImageWhereInput
    data: SubCategoryImageUpdateInput
  }

  export type SubCategoryImageDeleteManyInput = {
    where: SubCategoryImageWhereInput
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductSubCategoryUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductSubCategoryWhereUniqueInput
    update: XOR<ProductSubCategoryUpdateWithoutSubCategoryInput, ProductSubCategoryUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<ProductSubCategoryCreateWithoutSubCategoryInput, ProductSubCategoryUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProductSubCategoryUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: ProductSubCategoryWhereUniqueInput
    data: XOR<ProductSubCategoryUpdateWithoutSubCategoryInput, ProductSubCategoryUncheckedUpdateWithoutSubCategoryInput>
  }

  export type ProductSubCategoryUpdateManyWithWhereWithoutSubCategoryInput = {
    where: ProductSubCategoryScalarWhereInput
    data: XOR<ProductSubCategoryUpdateManyMutationInput, ProductSubCategoryUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type ProductCreateWithoutProductSubCategoriesInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    productReviews?: ProductReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductSubCategoriesInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productReviews?: ProductReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductSubCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductSubCategoriesInput, ProductUncheckedCreateWithoutProductSubCategoriesInput>
  }

  export type SubCategoryCreateWithoutProductSubCategoriesInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    parent: CategoryCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateWithoutProductSubCategoriesInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    parentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryCreateOrConnectWithoutProductSubCategoriesInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutProductSubCategoriesInput, SubCategoryUncheckedCreateWithoutProductSubCategoriesInput>
  }

  export type ProductUpsertWithoutProductSubCategoriesInput = {
    update: XOR<ProductUpdateWithoutProductSubCategoriesInput, ProductUncheckedUpdateWithoutProductSubCategoriesInput>
    create: XOR<ProductCreateWithoutProductSubCategoriesInput, ProductUncheckedCreateWithoutProductSubCategoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductSubCategoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductSubCategoriesInput, ProductUncheckedUpdateWithoutProductSubCategoriesInput>
  }

  export type ProductUpdateWithoutProductSubCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    productReviews?: ProductReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductSubCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productReviews?: ProductReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SubCategoryUpsertWithoutProductSubCategoriesInput = {
    update: XOR<SubCategoryUpdateWithoutProductSubCategoriesInput, SubCategoryUncheckedUpdateWithoutProductSubCategoriesInput>
    create: XOR<SubCategoryCreateWithoutProductSubCategoriesInput, SubCategoryUncheckedCreateWithoutProductSubCategoriesInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutProductSubCategoriesInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutProductSubCategoriesInput, SubCategoryUncheckedUpdateWithoutProductSubCategoriesInput>
  }

  export type SubCategoryUpdateWithoutProductSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutProductSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    parentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorCreateInput = {
    color?: string | null
    image?: string | null
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewByInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewByInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartProductUpdateManyInput = {
    where: CartProductWhereInput
    data: CartProductUpdateInput
  }

  export type CartProductDeleteManyInput = {
    where: CartProductWhereInput
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewByNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewByNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewByInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    username: string
    role?: $Enums.Role
    defaultPaymentMethod?: string
    address?: XOR<AddressNullableCreateEnvelopeInput, AddressCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewByInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderProductUpdateManyInput = {
    where: OrderProductWhereInput
    data: OrderProductUpdateInput
  }

  export type OrderProductDeleteManyInput = {
    where: OrderProductWhereInput
  }

  export type ShippingAddressUpsertInput = {
    set: ShippingAddressCreateInput | null
    update: ShippingAddressUpdateInput
  }

  export type PaymentResultUpsertInput = {
    set: PaymentResultCreateInput | null
    update: PaymentResultUpdateInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    defaultPaymentMethod?: StringFieldUpdateOperationsInput | string
    address?: XOR<AddressNullableUpdateEnvelopeInput, AddressCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewByNestedInput
  }

  export type TopBarButtonUpsertInput = {
    set: TopBarButtonCreateInput | null
    update: TopBarButtonUpdateInput
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type ProductColorNullableCompositeFilter = {
    equals?: ProductColorObjectEqualityInput | null
    is?: ProductColorWhereInput | null
    isNot?: ProductColorWhereInput | null
    isSet?: boolean
  }

  export type OrderCreateManyUserInput = {
    id?: string
    products?: XOR<OrderProductListCreateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableCreateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: string | null
    paymentResult?: XOR<PaymentResultNullableCreateEnvelopeInput, PaymentResultCreateInput> | null
    total: number
    status?: string | null
    totalBeforeDiscount?: number | null
    couponApplied?: string | null
    shippingPrice?: number
    taxPrice?: number | null
    isPaid?: boolean
    totalSaved?: number | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    paidAt?: Date | string | null
    deliveredAt?: Date | string | null
    isNew?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyReviewByInput = {
    id?: string
    rating?: number
    review: string
    reviewCreatedAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutUserInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    products?: XOR<OrderProductListUpdateEnvelopeInput, OrderProductCreateInput> | OrderProductCreateInput[]
    shippingAddress?: XOR<ShippingAddressNullableUpdateEnvelopeInput, ShippingAddressCreateInput> | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentResult?: XOR<PaymentResultNullableUpdateEnvelopeInput, PaymentResultCreateInput> | null
    total?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    totalBeforeDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    couponApplied?: NullableStringFieldUpdateOperationsInput | string | null
    shippingPrice?: FloatFieldUpdateOperationsInput | number
    taxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    totalSaved?: NullableFloatFieldUpdateOperationsInput | number | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewByInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productReviews?: ProductReviewUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewByInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productReviews?: ProductReviewUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutReviewByInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    reviewCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryCreateManyProductInput = {
    id?: string
    subCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductReviewCreateManyProductInput = {
    id?: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductBenefitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductIngredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSizeUpdateInput = {
    size?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sold?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSubCategoryUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: SubCategoryUpdateOneRequiredWithoutProductSubCategoriesNestedInput
  }

  export type ProductSubCategoryUncheckedUpdateWithoutProductInput = {
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryUncheckedUpdateManyWithoutProductInput = {
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutProductReviewsNestedInput
  }

  export type ProductReviewUncheckedUpdateWithoutProductInput = {
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewUncheckedUpdateManyWithoutProductInput = {
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewCreateManyReviewInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductReviewUpdateWithoutReviewInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductReviewsNestedInput
  }

  export type ProductReviewUncheckedUpdateWithoutReviewInput = {
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewUncheckedUpdateManyWithoutReviewInput = {
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    brand?: string | null
    slug: string
    benefits?: XOR<ProductBenefitListCreateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListCreateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: number
    numReviews?: number
    featured?: boolean
    sku: string
    images?: XOR<ImageListCreateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListCreateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: number | null
    sold?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryCreateManyParentInput = {
    id?: string
    name: string
    slug: string
    images?: XOR<SubCategoryImageListCreateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUpdateManyWithoutProductNestedInput
    productReviews?: ProductReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUncheckedUpdateManyWithoutProductNestedInput
    productReviews?: ProductReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    benefits?: XOR<ProductBenefitListUpdateEnvelopeInput, ProductBenefitCreateInput> | ProductBenefitCreateInput[]
    ingredients?: XOR<ProductIngredientListUpdateEnvelopeInput, ProductIngredientCreateInput> | ProductIngredientCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    numReviews?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    sku?: StringFieldUpdateOperationsInput | string
    images?: XOR<ImageListUpdateEnvelopeInput, ImageCreateInput> | ImageCreateInput[]
    sizes?: XOR<ProductSizeListUpdateEnvelopeInput, ProductSizeCreateInput> | ProductSizeCreateInput[]
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    sold?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSubCategories?: ProductSubCategoryUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    images?: XOR<SubCategoryImageListUpdateEnvelopeInput, SubCategoryImageCreateInput> | SubCategoryImageCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryCreateManySubCategoryInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryImageUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    public_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductSubCategoryUpdateWithoutSubCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductSubCategoriesNestedInput
  }

  export type ProductSubCategoryUncheckedUpdateWithoutSubCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSubCategoryUncheckedUpdateManyWithoutSubCategoryInput = {
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartProductUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: InputJsonValue | InputJsonValue | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableStringFieldUpdateOperationsInput | string | null
    color?: XOR<ProductColorNullableUpdateEnvelopeInput, ProductColorCreateInput> | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OrderProductUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    productCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShippingAddressUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentResultUpdateInput = {
    id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopBarButtonUpdateInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
  }

  export type ProductColorWhereInput = {
    AND?: ProductColorWhereInput | ProductColorWhereInput[]
    OR?: ProductColorWhereInput[]
    NOT?: ProductColorWhereInput | ProductColorWhereInput[]
    color?: StringNullableFilter<"ProductColor"> | string | null
    image?: StringNullableFilter<"ProductColor"> | string | null
  }

  export type ProductColorNullableUpdateEnvelopeInput = {
    set?: ProductColorCreateInput | null
    upsert?: ProductColorUpsertInput
    unset?: boolean
  }

  export type ProductColorUpsertInput = {
    set: ProductColorCreateInput | null
    update: ProductColorUpdateInput
  }

  export type ProductColorUpdateInput = {
    color?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}