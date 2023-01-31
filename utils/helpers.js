module.exports = {
<<<<<<< HEAD
  format_date: (date) => {
    console.log(date);
    return new Date(date).toLocaleDateString();
    //   return `${new Date(date).getMonth() + 1}/${new Date(
    //     date
    //   ).getDate()}/${new Date(date).getFullYear()}`;
  },

  commentLengths: (comments) => {
    return comments.length;
  },
};
=======
    format_date: (date) => {
        //format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        //format large numbers with commas
        return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
        const randomNum = Math.random();

        //return a random emoji
        if (randomNum > 0.7) {
            return `<span for="img" aria-label="lightbulb">💡</span>`;
        } else if (randomNum > 0.4) {
            return `<span for="img" aria-label="laptop">💻</span>`;
        } else {
            return `<span for="img" aria-label="gear">⚙️</span>`;
        }
    },
};
>>>>>>> parent of 67b5a26 (added helpers)
