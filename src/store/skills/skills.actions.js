import SkillDb from '@/firebase/skill-db'

export default {
  /**
   * Fetch skills
   */
  getSkills: async ({ commit }) => {
    const skillDb = new SkillDb();

    const skills = await skillDb.readAll();
    commit('setSkills', skills)
  },
}
