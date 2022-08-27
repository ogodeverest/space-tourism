import Entity from "./Entity";

export default interface Crew extends Entity {
  role: string;
  bio: string;
}
