/*下面的注释防止jshint插件误报*/
/* jshint esversion: 6 */
var parts = [
    [
        ["Part Number", "Name", "Type", "Length"],
        ["BBa_K3885101", "P28a Promoter", "Regulatory", 42],
        ["BBa_K3885102", "T7p14 Promoter", "Regulatory", 20],
        ["BBa_K3885103", "P70c Promoter", "Regulatory", 61],
        ["BBa_K3885104", "P70b Promoter", "Regulatory", 61],
        ["BBa_K3885111", "UTR1", "RBS", 40],
        ["BBa_K3885112", "UTR2", "RBS", 35],
        ["BBa_K3885113", "UTR3", "RBS", 35],
        ["BBa_K3885121", "T7 RNAp", "Coding", 2052],
        ["BBa_K3885122", "tetO", "Coding", 20],
        ["BBa_K3885123", "ClpXP", "Coding", 2024],
        ["BBa_K3885124", "σ28 (fliA)", "Coding", 720],
        ["BBa_K3885125", "σ28-ssrA", "Coding", 753],
        ["BBa_K3885126", "tetR-ssrA", "Coding", 654],
        ["BBa_K3885131", "tetracycline resistance transcriptional repressor（tetR）", "Protein_Domain", 657],
        ["BBa_K3885142", "T500", "Terminator", 30],
        ["BBa_K3885151", "ssrA", "Tag", 33],
        ["BBa_K3885161", "CXCL9 mRNA", "DNA", 200],
        ["BBa_K3885171", "Interacting Guide RNA（igRNA）", "RNA", 143],
        ["BBa_K3885172", "Guide RNA (gRNA) target for tetR", "RNA", 100],

    ],
    [
        ["Part Number", "Name", "Type", "Length"],
        ["BBa_K3885201", "P70-T7 RNAp", "Composite", 2713],
        ["BBa_K3885202", "P70-σ28", "Composite", 781],
        ["BBa_K3885203", "P70-ClpXP", "Composite", 2085],
        ["BBa_K3885211", "P28-tetR", "Composite", 705],
        ["BBa_K3885212", "P28-tetR-ssrA", "Composite", 746],
        ["BBa_K3885221", "J23119-gRNA", "Composite", 143],
        ["BBa_K3885222", "J23119-CXCL9", "Composite", 243],
        ["BBa_K3885223", "J23119-igRNA1", "Composite", 186],
        ["BBa_K3885301", "T7-sfGFP", "Reporter", 810],
        ["BBa_K3885302", "T7-deGFP", "Reporter", 742],
        ["BBa_K3885311", "P70a-UTR1-deGFP", "Reporter", 787],
        ["BBa_K3885312", "P70a-UTR2-deGFP", "Reporter", 782],
        ["BBa_K3885313", "P70a-UTR3-deGFP", "Reporter", 782],
        ["BBa_K3885321", "P70b-UTR1-deGFP", "Reporter", 793],
        ["BBa_K3885322", "P70b-UTR2-deGFP", "Reporter", 788],
        ["BBa_K3885323", "P70b-UTR3-deGFP", "Reporter", 788],
        ["BBa_K3885331", "P70c-UTR1-deGFP", "Reporter", 793],
        ["BBa_K3885332", "P70c-UTR2-deGFP", "Reporter", 788],
        ["BBa_K3885333", "P70c-UTR3-deGFP", "Reporter", 788],
        ["BBa_K3885341", "P70-σ28-P28-deGFP", "Reporter", 1515],
        ["BBa_K3885342", "P70-σ28-P28-tetR", "Composite", 1494],
        ["BBa_K3885351", "P28-tetO-deGFP", "Reporter", 754],
        ["BBa_K3885352", "P28-tetO-deGFP-ssrA", "Reporter", 795],
        ["BBa_K3885353", "P28-tetO-deGFP-MGapt", "Reporter", 800],

    ],
    [
        ["Part Number", "Name", "Type", "Description", "Length"],
        ["BBa_K3885101", "P28a Promoter", "Regulatory", "Promoter of the tar gene (E. coli) specific to σ28", 42],
        ["BBa_K3885103", "P70c Promoter", "Regulatory", "OR2-OR1 promoter (BBa_K2411000) with mutation in Regulatory.", 61],
        ["BBa_K3885104", "P70b Promoter", "Regulatory", "OR2-OR1 promoter (BBa_K2411000) with mutation in Regulatory.", 61],
        ["BBa_K3885111", "UTR1", "RBS", "The untranslated region containing the T7 g10 leader sequence for highly efficient translation initiation", 40],
        ["BBa_K3885112", "UTR2", "RBS", "UTR1 (BBa_K3885111) with mutation in RBS.", 35],
        ["BBa_K3885113", "UTR3", "RBS", "UTR1 (BBa_K3885111) with mutation in RBS.", 35],
        ["BBa_K3885123", "ClpXP", "Coding", "E. coli clpXP tandem proteins (same operon)", 2024],
        ["BBa_K3885124", "σ28 (fliA)", "Coding", "rpoF (E. coli σ28)", 720],
        ["BBa_K3885126", "tetR-ssrA", "Coding", "Tet operon regulatory gene tagged with ssrA", 654],
        ["BBa_K3885151", "ssrA", "Tag", "SsrA peptide for degradation by AAA+ proteases", 33],
        ["BBa_K3885161", "CXCL9 mRNA", "DNA", "CXCL9 mRNA is targeting RNA detected by the biosensor.", 200],
        ["BBa_K3885171", "Interacting Guide RNA（igRNA）", "DNA", "The rational design of igRNA is adding additional sequences in the 5' of sgRNA. ", 143],
        ["BBa_K3885202", "P70-σ28", "Composite", "The transcription factor σ28 is expressed by P70 promoter.", 781],
        ["BBa_K3885203", "P70-ClpXP", "Composite", "ClpXP protein can be expressed by P70 promoter.", 2085],
        ["BBa_K3885211", "P28-tetR", "Composite", "The repressor tetR is activated by P28 promoter.", 705],
        ["BBa_K3885212", "P28-tetR-ssrA", "Composite", "The tag ssrA can degrade the tetR repressor activated by P70 promoter.", 746],
        ["BBa_K3885311", "P70a-UTR1-deGFP", "Reporter", "DeGFP can be expressed by P70a promoter with UTR1.", 787],
        ["BBa_K3885312", "P70a-UTR2-deGFP", "Reporter", "DeGFP can be expressed by P70a promoter with UTR2.", 782],
        ["BBa_K3885313", "P70a-UTR3-deGFP", "Reporter", "DeGFP can be expressed by P70a promoter with UTR3.", 782],
        ["BBa_K3885321", "P70b-UTR1-deGFP", "Reporter", "DeGFP can be expressed by P70b promoter with UTR1.", 793],
        ["BBa_K3885322", "P70b-UTR2-deGFP", "Reporter", "DeGFP can be expressed by P70b promoter with UTR2.", 788],
        ["BBa_K3885323", "P70b-UTR3-deGFP", "Reporter", "DeGFP can be expressed by P70b promoter with UTR3.", 788],
        ["BBa_K3885331", "P70c-UTR1-deGFP", "Reporter", "DeGFP can be expressed by P70c promoter with UTR1.", 793],
        ["BBa_K3885332", "P70c-UTR2-deGFP", "Reporter", "DeGFP can be expressed by P70c promoter with UTR2.", 788],
        ["BBa_K3885333", "P70c-UTR3-deGFP", "Reporter", "DeGFP can be expressed by P70c promoter with UTR3.", 788],
        ["BBa_K3885341", "P70-σ28-P28-deGFP", "Reporter", "The expression of σ28 activated by P70 promoter motivates the P28 promoter and deGFP expression..", 1515],
        ["BBa_K3885342", "P70-σ28-P28-tetR", "Composite", "The expression of σ28 activated by P70 promoter motivates the P28 promoter and tetR expression..", 1494],
        ["BBa_K3885351", "P28-tetO-deGFP", "Reporter", "P28 promoter with tetO binding site motivated the expression of deGFP.", 754],
        ["BBa_K3885352", "P28-tetO-deGFP-ssrA", "Reporter", "P28 promoter motivated the expression of deGFP, which can be degraded with ssrA tag.", 795],

    ]
];
$(".parts-table").each(function (index, container) {
    // console.log(item);
    let data = parts[index],
        table = `<div class="table-responsive"><table class="table table-striped"><thead>`;
    data.forEach(function (arr, k) {
        table += `<tr>`;
        if (k == 0) {
            arr.forEach(function (item, i) {
                table += `<td>${item}</td>`;
            });
            table += `</tr></thead><tbody>`;
        } else {

            arr.forEach(function (item, i) {
                if (i == 0) {
                    // console.log(index);
                    table += `<td><a href="http://parts.igem.org/Part:${item}">${item}</a>${((["BBa_K3885124","BBa_K3885311"].includes(item))&&(index!==2))?`<span
                    class="glyphicon glyphicon-heart" style="color: #e81224;"></span>`:""}</td>`;
                } else {
                    table += `<td>${item}</td>`;
                }

            });
            table += `</tr>`;
        }

    });
    table += `</tbody></table>`;
    $(container).html(table);
});