var studies = require('../src/lib/studies');

module.exports = {
    configurations: [ { "trendPrChannel" : { "regression" : "trendPrChannel400_2" }, "prChannel" : { "lower" : "prChannelLower250_3_19", "upper" : "prChannelUpper250_3_19" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : false, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel400_2" }, "prChannel" : { "lower" : "prChannelLower300_4_19", "upper" : "prChannelUpper300_4_19" }, "rsi" : { "oversold" : 20, "overbought" : 80, "rsi" : "rsi5" }, "sma13" : false, "ema50" : false, "ema100" : true, "ema200" : true }, { "trendPrChannel" : { "regression" : "trendPrChannel400_2" }, "prChannel" : { "lower" : "prChannelLower300_3_19", "upper" : "prChannelUpper300_3_19" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : true, "ema50" : true, "ema100" : false, "ema200" : false }, { "trendPrChannel" : { "regression" : "trendPrChannel500_2" }, "prChannel" : { "lower" : "prChannelLower250_3_21", "upper" : "prChannelUpper250_3_21" }, "rsi" : { "oversold" : 20, "overbought" : 80, "rsi" : "rsi5" }, "sma13" : false, "ema50" : false, "ema100" : false, "ema200" : false }, { "trendPrChannel" : { "regression" : "trendPrChannel400_2" }, "prChannel" : { "lower" : "prChannelLower250_3_19", "upper" : "prChannelUpper250_3_19" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : true, "ema50" : true, "ema100" : true, "ema200" : false }, { "trendPrChannel" : { "regression" : "trendPrChannel600_2" }, "prChannel" : { "lower" : "prChannelLower300_4_19", "upper" : "prChannelUpper300_4_19" }, "rsi" : { "oversold" : 23, "overbought" : 77, "rsi" : "rsi7" }, "sma13" : false, "ema50" : false, "ema100" : true, "ema200" : true } ],
    studies: [
        {study: studies.Ema, inputs: {length: 200}, outputMap: {ema: 'ema200'}},
        {study: studies.Ema, inputs: {length: 100}, outputMap: {ema: 'ema100'}},
        {study: studies.Ema, inputs: {length: 50}, outputMap: {ema: 'ema50'}},
        {study: studies.Sma, inputs: {length: 13}, outputMap: {sma: 'sma13'}},
        {study: studies.Rsi, inputs: {length: 7}, outputMap: {rsi: 'rsi7'}},
        {study: studies.Rsi, inputs: {length: 5}, outputMap: {rsi: 'rsi5'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel250_3_19', upper: 'prChannelUpper250_3_19', lower: 'prChannelLower250_3_19'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 2.1}, outputMap: {regression: 'prChannel250_3_21', upper: 'prChannelUpper250_3_21', lower: 'prChannelLower250_3_21'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 1.9}, outputMap: {regression: 'prChannel300_3_19', upper: 'prChannelUpper300_3_19', lower: 'prChannelLower300_3_19'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 1.9}, outputMap: {regression: 'prChannel300_4_19', upper: 'prChannelUpper300_4_19', lower: 'prChannelLower300_4_19'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 400, degree: 2}, outputMap: {regression: 'trendPrChannel400_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 500, degree: 2}, outputMap: {regression: 'trendPrChannel500_2'}},
        {study: studies.PolynomialRegressionChannel, inputs: {length: 600, degree: 2}, outputMap: {regression: 'trendPrChannel600_2'}}
    ]
};
