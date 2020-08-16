export type Serializable = SerializableScalar | SerializableObject | SerializableArray;
export type SerializableArray = (
  | SerializableScalar
  | SerializableObject
  | SerializableArray
)[];
export type SerializableObject = {
  [key: string]: SerializableScalar | SerializableObject | SerializableArray;
};
export type SerializableScalar = string | number | boolean | null;
