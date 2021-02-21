import {
  PlateType as PT,
  AttackType as ATK,
  Coord,
  DefenceType as DEF,
  EnemyMoveType as MOVE,
  EnemySquad,
  EnemyWave,
  StageFieldType,
  StageData,
  XY,
  MapObjectType as ITEM,
} from './models';

function enemy(
  pos: Coord,
  level: number,
  atkType: ATK,
  defType: DEF,
  moveType: MOVE,
  isBoss?: boolean,
  wave?: EnemyWave[]
): EnemySquad {
  return {
    pos,
    level,
    atkType,
    defType,
    moveType,
    wave: wave ?? [],
    isBoss,
  };
}

export const stageList: StageData[] = [
  {
    id: '6-1',
    name: {
      'ko-kr': '후쿠야마구 2번지',
      'ja-jp': '北山区2丁目',
      default: '北山区2丁目',
    },
    map: [
      { pos: XY(1, 0), type: PT.Summon },
      { pos: XY(3, 0), type: PT.Normal },
      { pos: XY(1, 1), type: PT.Normal },
      { pos: XY(2, 1), type: PT.Hidden, linked: XY(1, 3), hidden: true },
      { pos: XY(3, 1), type: PT.Normal },
      { pos: XY(0, 2), type: PT.Summon },
      { pos: XY(2, 2), type: PT.Normal },
      { pos: XY(0, 3), type: PT.Normal },
      { pos: XY(1, 3), type: PT.Button, linked: XY(2, 1), makeHide: false },
      { pos: XY(2, 3), type: PT.Normal },
      { pos: XY(0, 4), type: PT.Normal },
    ],
    items: [
      { pos: XY(3, 0), type: ITEM.Gem },
      { pos: XY(1, 1), type: ITEM.Drone },
    ],
    enemies: [
      enemy(XY(2, 2), 3, ATK.Normal, DEF.Heavy, MOVE.Guard),
      enemy(XY(3, 2), 3, ATK.Normal, DEF.Heavy, MOVE.Guard),
      enemy(XY(4, 0), 3, ATK.Normal, DEF.Heavy, MOVE.Guard),
      enemy(XY(1, 3), 3, ATK.Normal, DEF.Heavy, MOVE.Static, true), // BOSS
    ],
    fieldType: StageFieldType.OutDoor,
  },
];
