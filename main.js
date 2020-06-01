// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate () {
      let randBase 
      do {
        randBase = returnRandBase()
        if(dna[0] !== randBase) {
         break
        } 
      } while (1);
      dna[0] = randBase
      return dna    
    },
    compareDNA (pAequor) {
      let dnaSameness = 0
      for (i=0; i < pAequor.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i])
          dnaSameness++
      }
      let percentSame = (dnaSameness / 15) * 100
      return "specimen #" + pAequor.specimenNum + " and specimen #" + this.specimenNum + " have " + percentSame.toFixed(2) + "% DNA in common."
    },
    willLikelySurvive() {
      let cOrG = 0
      for (i=0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G")
        cOrG++
      }
      const willSurvive = (cOrG / 15) * 100
      if (willSurvive >= 60) {
        return true 
      } else {
        return false
      }
    }
  }
}

const spec1 = pAequorFactory(1,mockUpStrand())
const spec2 = pAequorFactory(2,mockUpStrand())
const spec3 = pAequorFactory(3,mockUpStrand())
const spec4 = pAequorFactory(4,mockUpStrand())



const thirtyExamplesAll = []

const pushToTEA = () => {
  for (i = 1; i < 31; i++) {
    thirtyExamplesAll.push(pAequorFactory(i, mockUpStrand()))
  }
}
pushToTEA()

const thirtyExamples = thirtyExamplesAll.filter(i => i.willLikelySurvive() === true) 

console.log(Object.values(thirtyExamples[0]))
