const users = [
  { id: 1, username: "dania", followers: 1200, verified: true },
  { id: 2, username: "omar", followers: 350, verified: false },
  { id: 3, username: "luna", followers: 2400, verified: true },
  { id: 4, username: "zain", followers: 90, verified: false },
  { id: 5, username: "maya", followers: 800, verified: true },
];

const posts = [
  { id: 1, userId: 1, title: "Why JavaScript is Weird", content: "JavaScript has strange but interesting behavior.", likes: 1500, category: "Programming" },
  { id: 2, userId: 3, title: "Best Gaming Setup", content: "Today I will show my gaming room.", likes: 2200, category: "Gaming" },
  { id: 3, userId: 1, title: "React Tips", content: "Use components to organize your UI.", likes: 900, category: "Programming" },
  { id: 4, userId: 5, title: "Morning Routine", content: "Small habits can change your day.", likes: 700, category: "Lifestyle" },
];

// Task 1
const userCards = users.map(user => 
  `@${user.username} ${user.followers} followers ${user.followers >= 500 ? "Active User" : "New User"}`
);

// Task 2
const viralPosts = posts.filter(post => post.likes > 1000);

// Task 3
const mostPopularUser = users.reduce((maxUser, currentUser) => 
  (currentUser.followers > maxUser.followers ? currentUser : maxUser)
);

// Task 4
const inactiveUsers = users.filter(user => 
  !posts.some(post => post.userId === user.id)
);

// Task 5
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

// Task 6
const isThereVerifiedUser = users.some(user => user.verified);

// Task 7
const isPlatformQualityHigh = posts.every(post => post.title && post.content);

// Task 8
const trendingTitles = posts.map(post => post.title.toUpperCase());

// Task 9
const gamingFeed = posts.filter(post => post.category === "Gaming");

// Task 10
const sortedUsers = [...users].sort((a, b) => b.followers - a.followers);

// Task 11
const searchedUsername = "dania";
const foundUser = users.find(user => user.username === searchedUsername);

// Task 12
const categoryCounts = posts.reduce((acc, post) => {
  acc[post.category] = (acc[post.category] || 0) + 1;
  return acc;
}, {});

const mostPopularCategory = Object.keys(categoryCounts).reduce((a, b) => 
  categoryCounts[a] > categoryCounts[b] ? a : b
);

const platformStatistics = {
  totalUsers: users.length,
  totalPosts: posts.length,
  totalLikes: totalLikes,
  averageLikesPerPost: Number((totalLikes / posts.length).toFixed(2)),
  mostPopularCategory: mostPopularCategory
};
