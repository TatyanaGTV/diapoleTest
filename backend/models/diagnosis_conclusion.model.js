const TAFFY = require('taffy');
const conclusions = TAFFY(require('../data/diagnosis_conclusion-initial.json'));

class Diagnosis_conclusionModel {
    static findAll(userId) {
        return conclusions({user_id: userId}).get();
    }

    static findOne(params) {
        return conclusions(params).first();
    }

    static create(data) {
        return conclusions.insert(data);
    }

    static update(params, title) {
        const raport = conclusions(params);
        if (raport) {
          raport.update({title: title});

            const updatedRaport = raport.first();
            return {
                id: updatedRaport.id,
                title: updatedRaport.title
            };
        }
        return null;
    }

    static delete(filter) {
        return conclusions(filter).remove();
    }
}

module.exports = Diagnosis_conclusionModel;
