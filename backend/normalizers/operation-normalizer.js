
const Diagnosis_conclusionModel = require('../models/diagnosis_conclusion.model');

class Diagnosis_conclusionNormalizer {
    static normalize(userId, item) {
        let diagnosisRaports = Diagnosis_conclusionModel.findAll(userId);
    // подкмать как будет выглядеть дата
        const data = {
            id: item.id,
            solution: item.solution,
            date: item.date,

        };

     //   if (data.type === 'income') {
     //       const categoryIncome = categoriesIncome.find(cat => cat.id === item.category_income_id);
      //      if (categoryIncome) {
      //          data.category = categoryIncome.title;
      //      }
      //  }

        return data;
    }
}

module.exports = Diagnosis_conclusionNormalizer;
