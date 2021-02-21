export type Locale<T> = {
  'ko-kr'?: T;
  'en-us'?: T;
  'ja-jp'?: T;
  default: T;
};

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

// Hexagonal coordinate system
// x, y starts from top-left point, (zero-starting)
// the overall coordinate plane looks like below.
//
//  (0, 0) - (1, 0) - (2, 0) - (3, 0) - ...
//     (0, 1) - (1, 1)  - (2, 1) - ...
//  (0, 2) - (1, 2) - (2, 2) - (3, 2) - ...
//      ...
export interface Coord {
  x: number;
  y: number;
}

export function XY(x: number, y: number): Coord {
  return { x, y };
}

export const enum PlateType {
  Normal = 0,
  Button,
  Hidden,
  WarpSingle,
  WarpDouble,
  Summon,
}

export type Plate =
  | NormalPlate
  | ButtonPlate
  | HiddenPlate
  | WarpSinglePlate
  | WarpDoublePlate
  | SummonPlate;

export interface PlateBase {
  pos: Coord;
  type: PlateType;
}

export interface NormalPlate extends PlateBase {
  type: PlateType.Normal;
}

export interface ButtonPlate extends PlateBase {
  type: PlateType.Button;
  linked: Coord;
  makeHide: boolean;
}

export interface HiddenPlate extends PlateBase {
  type: PlateType.Hidden;
  linked: Coord;
  hidden: boolean;
}

export interface WarpSinglePlate extends PlateBase {
  type: PlateType.WarpSingle;
  linked: Coord;
}

export interface WarpDoublePlate extends PlateBase {
  type: PlateType.WarpDouble;
  linked: Coord;
}

export interface SummonPlate extends PlateBase {
  type: PlateType.Summon;
}

export const enum MapObjectType {
  Gem = 0,
  Food,
  AtkUp,
  DefUp,
  Drone,
}

export interface MapObject {
  pos: Coord;
  type: MapObjectType;
}

export const enum AttackType {
  Normal = 0,
  Explosion,
  Penentration,
  Mystic,
  Siege,
}

export const enum DefenceType {
  Light = 0,
  Heavy,
  Mystic,
  Obstacle,
}

export const enum StudentClass {
  Tank = 0,
  Attacker,
  Suporter,
  Healer,
}

export interface Student {
  id: number;
  name: Locale<string>;
  rarity: number;
  class: StudentClass;
  isStriker: boolean;
  atkType: AttackType;
  defType: DefenceType;
}

export interface PlayerSquad {
  atkType: AttackType;
  defType: DefenceType;
  strikers: Student[];
  specials: Student[];
}

export const enum EnemyMoveType {
  Static = 0,
  Guard,
  Advance,
}

export interface Enemy {
  id: number;
  avatarId: number;
  name: Locale<string>;
  hp: number;
  atk: number;
  def: number;
  atkType: AttackType;
  defType: DefenceType;
  isDanger?: boolean;
  isBoss?: boolean;
}

export type EnemyWave = Enemy[];

export interface EnemySquad {
  pos: Coord;
  level: number;
  atkType: AttackType;
  defType: DefenceType;
  moveType: EnemyMoveType;
  wave: EnemyWave[];
  isBoss?: boolean;
}

export const enum StageFieldType {
  Indoor = 0,
  City,
  OutDoor,
}

export interface MapStatus {
  map: Plate[];
  items: MapObject[];
  enemies: EnemySquad[];
}

export interface StageData extends MapStatus {
  id: string;
  name: Locale<string>;
  fieldType: StageFieldType;
}

export const enum Phase {
  Player = 0,
  Enemy,
}

export interface PlayerSquad {
  squadId: number;
  pos: Coord;
  items: MapObject[];
  defeated: boolean;
}

export interface PlayerState {
  squad: PlayerSquad[];
}
