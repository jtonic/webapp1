const tonyProfile: Profile = { name: 'Tony', role: 'admin' };

export interface Profile {
  name?: string;
  role?: string;
}

export function getBadProfile1(): Profile | null {
  return null;
}

export function getBadProfile2(): Profile | undefined {
  return undefined;
}
export function getGoodProfile(): Profile | null | undefined {
  return tonyProfile;
}

export default tonyProfile;
