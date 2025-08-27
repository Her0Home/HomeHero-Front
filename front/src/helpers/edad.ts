export const getAgeFromBirthdate = (birthdate?: Date): number | null => {
  if (!birthdate) return null;

  const today = new Date();
  const birth = birthdate instanceof Date ? birthdate : new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};