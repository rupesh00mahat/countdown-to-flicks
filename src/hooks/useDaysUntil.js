import React, {useEffect, useState} from 'react'

function useDaysUntil(releaseDate) {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    setDaysLeft(
      Math.ceil(
        (new Date(releaseDate.toString()) - new Date()) / (1000 * 60 * 60 * 24)
      )
    );

    const calculateDaysLeft = () =>{
      const currentDate = new Date();
      const targetDate = new Date(releaseDate);
      if(isNaN(targetDate.getTime())){
        console.error('Invalid data provided');
        return 0 ;
      }
      const timeDifference = targetDate - currentDate;
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      return daysRemaining >= 0 ? daysRemaining : 0;
    }
    setDaysLeft(calculateDaysLeft());
  }, [releaseDate]);
  return daysLeft;

}

export default useDaysUntil