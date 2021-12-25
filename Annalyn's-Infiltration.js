
export function canExecuteFastAttack(knightIsAwake) 
{
  if(knightIsAwake)
    return false;
  else return true;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(knightIsAwake||archerIsAwake||prisonerIsAwake)
    return true;
  else return false;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(archerIsAwake==false && prisonerIsAwake==true)
  {
    return true;
  }
  else return false;
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if(petDogIsPresent==true &&archerIsAwake==false||petDogIsPresent==false && prisonerIsAwake==true &&knightIsAwake==false && archerIsAwake==false)
    return true;
  else return false;
}
