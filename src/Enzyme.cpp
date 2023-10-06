#include <string>
#include <vector>

enum EnzymeClass {
    OXIDOREDUCTASES,
    TRANSFERASES,
    HYDROLASES,
    LYASES,
    ISOMERASES,
    LIGASES
};


struct EnzymeAttrs {
    std::string name;
    EnzymeClass enzymeClass;

    std::vector<Molecule> substrates;
    std::vector<Molecule> cofactor;
    
    double reactionRate;
};

class Enzyme {
public:
    EnzymeAttrs attrs;

    Enzyme(const EnzymeAttrs& attributes) : attrs(attributes) {}

    void catalyze() {
        // Implement the catalysis logic here
    }
};