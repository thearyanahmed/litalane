// Real client reviews. Add one object per review — that's the whole file.
// The testimonials section hides itself when this list is empty.
const all = [
  // { review: "She was lovely, and the house has never looked better.", first_name: "Megan" },
  {
    first_name: "Becky" ,
    review: "Such a beautiful treatment! Facial was amazing, so was the back massage! Jazakallahu Khair!"
  },
  {
    first_name: "Jasmin",
    review: "Iv had this, it's ( Beef Biriyani ) delicious my family literally ate plate after plate",
  },
  {
    first_name: "Ruba",
    review: "Had the pleasure to eat Lita Lanes dish today, this was lovely, beautiful flavours, wholesome, it's great for those days you don't want to cook yet want to home cooked food. Looking forward to next mondays menu!"
  },
  {
    first_name: "Ffion",
    review: "Masha'allah it was very nice <3<3"
  },
  {
    first_name: "Subina",
    review: "Allahumma barik lahu it was delicious <3 thank you! Yusuf really enjoyed the avocado sauce. I kept some for my husband too x"
  },
  {
    first_name: "Rafia",
    review: "Food was so yummy mashaAllah. Enjoyed it Alhamdulilah ^_^ One of my fav meals",
  },
  {
    first_name: "Ruba",
    review: "It was lovely Lita! The avocado sauce was great, what did you put in it? So refreshing",
  },
  {
    first_name: "Riffut",
    review: "MasahaAllah the biriyani was absolutely wonderful. I was sad when it finished <3",
  },
  {
    first_name: "Ffion",
    review: "Your biriyani is amazing thank you so much my sister xxx"
  },
  {
    first_name: "Ffion",
    review: "It's perfect i've only had a little mouthful, but I'm waiting for my husband to come back to eat the rest but it is stunning xxx. Thank you so much xxx",
  },
  {
    first_name: "Jasmin",
    review: "Just had this beautiful meal delivered... it was delicious, fresh and perfectly cooked, can't wait to try other dishes",
  },
  {
    first_name: "Jasmin",
    review: "Very decent portion and good value for money"
  },
  {
    first_name: "Riffut",
    review: "Just finished ours..it was delicious. Wondering what we will get next week"
  },
  {
    first_name: "Jasmin",
    review: "My husband was wondering the same thing but I would be happy with this again"
  },
  {
    first_name: "Linette",
    review: "Thank you very much for your time today. I feel very well pampered. It was worth every penny."
  },
  {
    first_name: "Marilyn",
    review: "Thank you very much. I look forward to working with you in the future."
  },
  {
    first_name: "Safiya",
    review: "I was feeling good after the massage. Thank you for everything."
  },
  {
    first_name: "Safia", // different than Safiya
    review: "JazakAllah sister. It was honestly a lovely experience. The girls really loved it and enjoyed themselves. Thanks again for organising the little spa, as I mentioned previously, there's nothing like this nearby <3",
  },
  {
    first_name: "Suriya",
    review: "Never got a chance to personally thank you for the pamper session. Maria enjoyed it so much. She still talks about it bless her but more so becuase she keeps reminding me to ask where you got your gel polish from..she loved the look of them.",
  },
  {
    first_name: "Najmin",
    review: "Today was really nice event. We'll be trying out face mask how you made it, inshaAllah. Thank you"
  },
  {
    first_name: "Happy",
    review: "Thank you for the special massage. You are an expart"
  },
  {
    first_name: "Rony",
    review: "My feet feels so smooth after the pedicure. Thank you so much for the extra time.",
  },
  {
    first_name: "Shammim",
    review: "Thank you for checking in. Thank you again for your time and for your care yesterday. I appreciate your hospitality and wish you every success with your business. May Allah put barakah in your work."
  },
];

// One card per person, quotes in the order they appear above.
const byName = new Map();
for (const r of all) {
  if (!r.review?.trim() || !r.first_name?.trim()) continue;
  if (!byName.has(r.first_name)) byName.set(r.first_name, { first_name: r.first_name, quotes: [] });
  byName.get(r.first_name).quotes.push(r.review);
}

export const reviews = [...byName.values()];
