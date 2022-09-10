import Entity from './Entity';

export default interface Destination extends Entity {
  description: string;
  distance: string;
  travel: string;
  model: string;
}
