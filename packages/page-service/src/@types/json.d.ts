export type Serializable = SerializableScalar | SerializableObject | SerializableArray;
export type SerializableArray = readonly (
  | SerializableScalar
  | SerializableObject
  | SerializableArray
)[];
export type SerializableObject = {
  readonly [key: string]: SerializableScalar | SerializableObject | SerializableArray;
};
export type SerializableScalar = string | number | boolean | null;
