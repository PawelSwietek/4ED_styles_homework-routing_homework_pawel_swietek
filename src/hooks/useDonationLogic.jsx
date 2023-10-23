import {useEffect, useState} from "react";

const UseDonationLogic = ({target, raised, donors}) => {
  const [goalData, setGoalData] = useState({raised, donors})
  const [isTargetReached, setIsTargetReached] = useState(false)

  useEffect(() => {
    if (goalData.raised >= target) {
      setIsTargetReached(true)
    }
  }, [goalData.raised])

  const donate = (donation = 1000) => {
    setGoalData(({raised, donors}) => ({raised: raised + donation, donors: donors + 1}))
  }

  return {isTargetReached, currentFunds: goalData.raised, currentDonors: goalData.donors, donate}
};

export default UseDonationLogic;


