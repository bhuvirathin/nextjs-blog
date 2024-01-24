import {Octokit} from '@octokit/core'

export async function getFullName(users){
  const result = await Promise.all(users.map(async (user) => {
    const userDetails = await getName(user);
    return userDetails
}));
  return result;
}
async function getName(user){
    const userDetails = await getFullNameofUser(user)
    user['name'] = userDetails.name
    return userDetails
}
export async function getFullNameofUser(user) {
  try {
    const octokit = new Octokit({
      auth: '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'
    })
    
    const {data} =await octokit.request('GET {url}', {
      url:user.url,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
     return data;
   } catch (error) {
     console.error('Database Error:', error);
     throw new Error('Failed to fetch the latest users.');
   }
 }

 export async function getUserDetails(username){
  try {
  const octokit = new Octokit({
    auth: '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'
  })
  
  const {data} =await octokit.request('GET /users/{username}', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return data
} catch (error) {
  console.error('Database Error:', error);
  throw new Error('Failed to fetch the latest users.');
}
 }
export async function fetchUsers() {
   try {
        const octokit = new Octokit({
            auth: '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'
          })
        const {data} =  await octokit.request('GET /users', {
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
            }
          })
        
      const updateData = await getFullName(data)
      return updateData;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest users.');
    }
  }