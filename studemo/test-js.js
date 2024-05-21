
function main() {
    const scoreSummary = [
        { grade: '[90-100]', records: 2n },
        { grade: '[80-90)', records: 1n },
        { grade: '[60-70)', records: 1n }
    ]

    console.log("socre-summary1: ", scoreSummary);

    BigInt.prototype.toJSON = function () {
        const int = Number.parseInt(this.toString());
        return int ?? this.toString();
    };

    console.log("socre-summary1: ", scoreSummary);

    //ss = JSON.stringify(scoreSummary.map(row => row.grade));
    //console.log("result: ", ss)


    const ss1 = [
        { '[0-59]': 0, '[60-69]': 1, '[70-79]': 0, '[80-89]': 1, '90及以上': 2 }
      ]
    
    const keys = Object.keys(ss1[0]);
    const values = Object.values(ss1[0]);

    console.log("keys: ", keys);
    console.log("values: ", values);

};

main();