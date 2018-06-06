var publicationList = [
    // add new publications here
    // follow this template
    /*
     * {PublicationItem: `
     * <tr><!--n-->
     *   <td>
     *     <span class="pubtitle">Title (must leave a space here)</span>
     *     <span class="pubauthor">author, follow the style of google scholar (must leave a space here)</span>
     *     <span class="pubjournal">journal (must leave a space here)</span>
     *     <span class="doi"><a href="https://doi.org/xxx" target="_blank">link</a></span>
     *   </td>
     *   <td>year</td>
     * </tr>
     * `},
     */
    {PublicationItem: `
      <tr><!--99-->
        <td>
          <span class="pubtitle">Structural-elastic determination of the mechanical lifetime of biomolecules </span>
          <span class="pubauthor">S Guo, Q Tang, M Yao, S Le, H Chen, J Yan </span>
          <span class="pubjournal">Chemical Science </span>
          <span class="doi"><a href="https://doi.org/10.1039/C8SC01319E" target="_blank">link</a></span>
        </td>
        <td>2018</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--98-->
        <td>
          <span class="pubtitle">Transfer-matrix calculations of the effects of tension and torque constraints on DNA-protein interactions </span>
          <span class="pubauthor">AK Efremov, J Yan </span>
          <span class="pubjournal">arXiv preprint arXiv:1802.01437 </span>
          <span class="doi"><a href="https://arxiv.org/abs/1802.01437" title="doi" target="_blank">link</a></span>
        </td>
        <td>2018</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--97-->
        <td>
          <span class="pubtitle">Two-State Folding Energy Determination Based on Transition Points in Non-Equilibrium Single-Molecule Experiments </span>
          <span class="pubauthor">H You, S Guo, S Le, Q Tang, M Yao, X Zhao, J Yan </span>
          <span class="pubjournal">The Journal of Physical Chemistry Letters </span>
          <span class="doi"><a href="https://doi.org/10.1021/acs.jpclett.7b03123" title="doi" target="_blank">link</a></span>
        </td>
        <td>2018</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--96-->
        <td>
          <span class="pubtitle">Tension-Dependent Stretching Activates ZO-1 to Control the Junctional Localization of Its Interactors </span>
          <span class="pubauthor">D Spadaro, S Le, T Laroche, I Mean, L Jond, J Yan, S Citi </span>
          <span class="pubjournal">Current Biology </span>
          <span class="doi"><a href="https://doi.org/10.1016/j.cub.2017.11.014" title="doi" target="_blank">link</a></span>
        </td>
        <td>2017</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--95-->
        <td>
          <span class="pubtitle">Mechanical responses of the mechanosensitive unstructured domains in cardiac titin </span>
          <span class="pubauthor">SM Pang, S Le, J Yan </span>
          <span class="pubjournal">Biology of the Cell </span>
          <span class="doi"><a href="https://doi.org/10.1111/boc.201700061" title="doi" target="_blank">link</a></span>
        </td>
        <td>2017</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--94-->
        <td>
          <span class="pubtitle">Mechanotransmission and Mechanosensing of Human alpha-Actinin 1 </span>
          <span class="pubauthor">S Le, X Hu, M Yao, H Chen, M Yu, X Xu, N Nakazawa, FM Margadant, MP Sheetz, J Yan </span>
          <span class="pubjournal">Cell Reports </span>
          <span class="doi"><a href="https://doi.org/10.1016/j.celrep.2017.11.040" title="doi" target="_blank">link</a></span>
        </td>
        <td>2017</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--93-->
        <td>
          <span class="pubtitle">mDia1 senses both force and torque during F-actin filament polymerization </span>
          <span class="pubauthor">M Yu, X Yuan, C Lu, S Le, R Kawamura, AK Efremov, Z Zhao, MM Kozlov, M Sheetz, A Bershadsky, J Yan </span>
          <span class="pubjournal">Nature Communications </span>
          <span class="doi"><a href="https://doi.org/10.1038/s41467-017-01745-4" title="doi" target="_blank">link</a></span>
        </td>
        <td>2017</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--92-->
        <td>
          <span class="pubtitle">Non-canonical activation of OmpR drives acid and osmotic stress responses in single bacterial cells </span>
          <span class="pubauthor">S Chakraborty, RS Winardhi, LK Morgan, J Yan, LJ Kenney </span>
          <span class="pubjournal">Nature Communications </span>
          <span class="doi"><a href="https://doi.org/10.1038/s41467-017-02030-0" title="doi" target="_blank">link</a></span>
        </td>
        <td>2017</td>
      </tr>
    `},
    {PublicationItem: `
      <tr><!--91-->
        <td>
          <span class="pubtitle">Charged residues in the H-NS linker drive DNA binding and gene silencing in single cells </span>
          <span class="pubauthor">Y Gao, YH Foo, RS Winardhi, Q Tang, J Yan, LJ Kenney </span>
          <span class="pubjournal">PNAS </span>
          <span class="doi"><a href="http://www.pnas.org/content/114/47/12560.abstract" title="doi" target="_blank">link</a></span>
        </td>
        <td>2017</td>
      </tr>
    `},
    {PublicationItem: `
  <tr><!--90-->
    <td>
      <span class="pubtitle">Parallel triplex structure formed between stretched single-stranded DNA and homologous duplex DNA </span>
      <span class="pubauthor">J Chen, Q Tang, S Guo, C Lu, S Le, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkx628" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--89-->
    <td>
      <span class="pubtitle">Studying the mechanical responses of proteins using magnetic tweezers </span>
      <span class="pubauthor">X Zhao, X Zeng, C Lu, J Yan </span>
      <span class="pubjournal">Nanotechnology </span>
      <span class="doi"><a href="https://doi.org/10.1088/1361-6528/aa837e" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--88-->
    <td>
      <span class="pubtitle">Bacillus subtilis RecA with DprA–SsbA antagonizes RecX function during natural transformation </span>
      <span class="pubauthor">S Le, E Serrano, R Kawamura, B Carrasco, J Yan, JC Alonso </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkx583" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--87-->
    <td>
      <span class="pubtitle">Oncofetal HMGA2 effectively curbs unconstrained (+) and (−) DNA supercoiling </span>
      <span class="pubauthor">X Zhao, S Peter, P Dröge, J Yan </span>
      <span class="pubjournal">Scientific Reports </span>
      <span class="doi"><a href="https://doi.org/10.1038/s41598-017-09104-5" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--86-->
    <td>
      <span class="pubtitle">Elasticity of the Transition State Leading to an Unexpected Mechanical Stabilization of Titin Immunoglobulin Domains </span>
      <span class="pubauthor">G Yuan, S Le, M Yao, H Qian, X Zhou, J Yan, H Chen </span>
      <span class="pubjournal">Angewandte Chemie </span>
      <span class="doi"><a href="https://doi.org/10.1002/ange.201700411" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--85-->
    <td>
      <span class="pubtitle">Theoretical Methods for Studying DNA Structural Transitions under Applied Mechanical Constraints </span>
      <span class="pubauthor">AK Efremov, RS Winardhi, J Yan </span>
      <span class="pubjournal">Polymers </span>
      <span class="doi"><a href="https://doi.org/10.3390/polym9020074" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--84-->
    <td>
      <span class="pubtitle">RHAU helicase stabilizes G4 in its nucleotide-free state and destabilizes G4 upon ATP hydrolysis </span>
      <span class="pubauthor">H You, S Lattmann, D Rhodes, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkw881" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--83-->
    <td>
      <span class="pubtitle">Applications of Magnetic Tweezers to Studies of NAPs </span>
      <span class="pubauthor">RS Winardhi, J Yan </span>
      <span class="pubjournal">The Bacterial Nucleoid </span>
      <span class="doi"><a href="https://doi.org/10.1007/978-1-4939-7098-8_14" title="doi" target="_blank">link</a></span>
    </td>
    <td>2017</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--82-->
    <td>
      <span class="pubtitle">Probing Small Molecule Binding to Unfolded Polyprotein Based on its Elasticity and Refolding </span>
      <span class="pubauthor">RS Winardhi, Q Tang, J Chen, M Yao, J Yan </span>
      <span class="pubjournal">Biophysical Journal </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.bpj.2016.10.031" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--81-->
    <td>
      <span class="pubtitle">FACT Remodels the Tetranucleosomal Unit of Chromatin Fibers for Gene Transcription </span>
      <span class="pubauthor">W Li, P Chen, J Yu, L Dong, D Liang, J Feng, J Yan, PY Wang, Q Li, Z Zhang, M Li, G Li </span>
      <span class="pubjournal">Molecular Cell </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.molcel.2016.08.024" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--80-->
    <td>
      <span class="pubtitle">A Reversible Association between Smc Coiled Coils Is Regulated by Lysine Acetylation and Is Required for Cohesin Association with the DNA </span>
      <span class="pubauthor">I Kulemzina, K Ang, X Zhao, JT Teh, V Verma, S Suranthran, AP Chavda, RG Huber, B Eisenhaber, F Eisenhaber, J Yan, D Ivanov </span>
      <span class="pubjournal">Molecular Cell </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.molcel.2016.08.008" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--79-->
    <td>
      <span class="pubtitle">Transfer-matrix calculations of DNA polymer micromechanics under tension and torque constraints </span>
      <span class="pubauthor">AK Efremov, RS Winardhi, J Yan </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.94.032404" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--78-->
    <td>
      <span class="pubtitle">Mechanisms of DNA disentangling by type II topoisomerases. Comment on" Disentangling DNA molecules" by Alexander Vologodskii </span>
      <span class="pubauthor">J Yan </span>
      <span class="pubjournal">Physics of Life Reviews </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.plrev.2016.09.005" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--77-->
    <td>
      <span class="pubtitle">Recent progress on the mechanics of sharply bent DNA </span>
      <span class="pubauthor">P Cong, J Yan </span>
      <span class="pubjournal">Science China Physics, Mechanics & Astronomy </span>
      <span class="doi"><a href="https://doi.org/10.1007/s11433-016-0099-0" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--76-->
    <td>
      <span class="pubtitle">The kinetics of force-dependent hybridization and strand-peeling of short DNA fragments </span>
      <span class="pubauthor">ZJ Yang, GH Yuan, WL Zhai, J Yan, H Chen </span>
      <span class="pubjournal">Science China Physics, Mechanics & Astronomy </span>
      <span class="doi"><a href="https://doi.org/10.1007/s11433-016-0112-0" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--75-->
    <td>
      <span class="pubtitle">The mechanical response of talin </span>
      <span class="pubauthor">M Yao, BT Goult, B Klapholz, X Hu, CP Toseland, Y Guo, P Cong, MP Sheetz, J Yan </span>
      <span class="pubjournal">Nature Communications </span>
      <span class="doi"><a href="https:doi.org/10.1038/ncomms11966" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--74-->
    <td>
      <span class="pubtitle">The horizontally-acquired response regulator SsrB drives a Salmonella lifestyle switch by relieving biofilm silencing </span>
      <span class="pubauthor">SK Desai, RS Winardhi, S Periasamy, MM Dykas, J Yan, LJ Kenney </span>
      <span class="pubjournal">eLife </span>
      <span class="doi"><a href="https://doi.org/10.7554/eLife.10747" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--73-->
    <td>
      <span class="pubtitle">Uncovering mechanosensing mechanisms at the single protein level using magnetic tweezers </span>
      <span class="pubauthor">S Le, R Liu, CT Lim, J Yan </span>
      <span class="pubjournal">Methods </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.ymeth.2015.08.020" title="doi" target="_blank">link</a></span>
    </td>
    <td>2016</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--72-->
    <td>
      <span class="pubtitle">Coil-globule transition of a single semiflexible chain in slitlike confinement </span>
      <span class="pubauthor">L Dai, CB Renner, J Yan, PS Doyle </span>
      <span class="pubjournal">Scientific Reports </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep18438" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--71-->
    <td>
      <span class="pubtitle">Regulation of bacterial DNA packaging in early stationary phase by competitive DNA binding of Dps and IHF </span>
      <span class="pubauthor">SY Lee, CJ Lim, P Dröge, J Yan </span>
      <span class="pubjournal">Scientific Reports  </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep18146" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--70-->
    <td>
      <span class="pubtitle">Revisiting the Anomalous Bending Elasticity of Sharply Bent DNA </span>
      <span class="pubauthor">P Cong, L Dai, H Chen, JRC van der Maarel, PS Doyle, J Yan </span>
      <span class="pubjournal">Biophysical journal </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.bpj.2015.10.016" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--69-->
    <td>
      <span class="pubtitle">Catch-bond behavior of DNA condensate under tension </span>
      <span class="pubauthor">W Li, WJ Wong, CJ Lim, HP Ju,M Li, J Yan, PY Wang </span>
      <span class="pubjournal">Chinese Physics B </span>
      <span class="doi"><a href="https://doi.org/10.1088/1674-1056/24/12/128704" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--68-->
    <td>
      <span class="pubtitle">H-NS Regulates Gene Expression and Compacts the Nucleoid: Insights from Single-Molecule Experiments </span>
      <span class="pubauthor">RS Winardhi, J Yan, LJ Kenney </span>
      <span class="pubjournal">Biophysical Journal </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.bpj.2015.08.016" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--67-->
    <td>
      <span class="pubtitle">Disturbance-free rapid solution exchange for magnetic tweezers single-molecule studies </span>
      <span class="pubauthor">S Le, M Yao, J Chen, AK Efremov, S Azimi, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkv554" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--66-->
    <td>
      <span class="pubtitle">Complex kinetics of DNA condensation revealed through DNA twist tracing </span>
      <span class="pubauthor">W Li, WJ Wong, CJ Lim, HP Ju, M Li, J Yan, PY Wang </span>
      <span class="pubjournal">Physics Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.92.022707" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--65-->
    <td>
      <span class="pubtitle">Transcriptional Repressor TrmBL2 from Thermococcus kodakarensis Forms Filamentous Nucleoprotein Structures and Competes with Histones for DNA Binding in a Salt- and DNA Supercoiling-dependent Manner </span>
      <span class="pubauthor">AK Efremov, Y Qu, H Maruyama, CJ Lim, K Takeyasu, J Yan </span>
      <span class="pubjournal">Journal of Biological Chemistry </span>
      <span class="doi"><a href="https://doi.org/10.1074/jbc.M114.626705" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--64-->
    <td>
      <span class="pubtitle">Mechanochemical regulations of RPA's binding to ssDNA </span>
      <span class="pubauthor">J Chen, S Le, A Basu, WJ Chazin, J Yan </span>
      <span class="pubjournal">Scientific Reports </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep09296" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--63-->
    <td>
      <span class="pubtitle">Dynamics of equilibrium folding and unfolding transitions of titin immunoglobulin domain under constant forces </span>
      <span class="pubauthor">H Chen, G Yuan, RS Winardhi, M Yao, I Popa, JM Fernandez, J Yan </span>
      <span class="pubjournal">Journal of the American Chemical Society </span>
      <span class="doi"><a href="https://doi.org/10.1021/ja5119368" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--62-->
    <td>
      <span class="pubtitle">Talin dependent mechanosensitivity of cell focal adhesions </span>
      <span class="pubauthor">J Yan, M Yao, BT Goult, MP Sheetz </span>
      <span class="pubjournal">Cellular and Molecular Bioengineering </span>
      <span class="doi"><a href="https://doi.org/10.1007/s12195-014-0364-5" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--61-->
    <td>
      <span class="pubtitle">Stability and kinetics of c-MYC promoter G-quadruplexes studied by single-molecule manipulation </span>
      <span class="pubauthor">H You, J Wu, F Shao, J Yan </span>
      <span class="pubjournal">Journal of the American Chemical Society </span>
      <span class="doi"><a href="https://doi.org/10.1021/ja511680u" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--60-->
    <td>
      <span class="pubtitle">The mechanotransduction machinery at work at adherens junctions </span>
      <span class="pubauthor">B Ladoux, WJ Nelson, J Yan, RM Mege </span>
      <span class="pubjournal">Integrative Biology </span>
      <span class="doi"><a href="https://doi.org/10.1039/C5IB00070J" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--59-->
    <td>
      <span class="pubtitle">Thermodynamics of force-dependent folding and unfolding of small protein and nucleic acid structures </span>
      <span class="pubauthor">M Yao, H Chen, J Yan </span>
      <span class="pubjournal">Integrative Biology </span>
      <span class="doi"><a href="https://doi.org/10.1039/C5IB00038F" title="doi" target="_blank">link</a></span>
    </td>
    <td>2015</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--58-->
    <td>
      <span class="pubtitle">Single-Molecule Study on Histone-Like Nucleoid-Structuring Protein (H-NS) Paralogue in Pseudomonas aeruginosa: MvaU Bears DNA Organization Mode Similarities to MvaT </span>
      <span class="pubauthor">RS Winardhi, S Castang, SL Dove, J Yan </span>
      <span class="pubjournal">PLoS ONE </span>
      <span class="doi"><a href="https://doi.org/10.1371/journal.pone.0112246" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--57-->
    <td>
      <span class="pubtitle">Interconversion between three overstretched DNA structures </span>
      <span class="pubauthor">X Zhang, Y Qu, H Chen, I Rouzina, S Zhang, PS Doyle, J Yan </span>
      <span class="pubjournal">Journal of the American Chemical Society </span>
      <span class="doi"><a href="https://doi.org/10.1021/ja5090805" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--56-->
    <td>
      <span class="pubtitle">Mechanical force antagonizes the inhibitory effects of RecX on RecA filament formation in Mycobacterium tuberculosis </span>
      <span class="pubauthor">S Le, H Chen, X Zhang, J Chen, KN Patil, K Muniyappa, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gku899" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--55-->
    <td>
      <span class="pubtitle">Dynamics and stability of polymorphic human telomeric G-quadruplex under tension </span>
      <span class="pubauthor">H You, X Zeng, Y Xu, CJ Lim, AK Efremov, AT Phan, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gku581" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--54-->
    <td>
      <span class="pubtitle">Single-molecule studies on the mechanical interplay between DNA supercoiling and H-NS DNA architectural properties </span>
      <span class="pubauthor">CJ Lim, LJ Kenney, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gku566" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--53-->
    <td>
      <span class="pubtitle">Force-dependent conformational switch of [alpha]-catenin controls vinculin binding </span>
      <span class="pubauthor">M Yao, W Qiu, R Liu, AK Efremov, P Cong, R Seddiki, M Payre, CT Lim, B Ladoux, RM Mege, J Yan </span>
      <span class="pubjournal">Nature Communications </span>
      <span class="doi"><a href="https://doi.org/10.1038/ncomms5525" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--52-->
    <td>
      <span class="pubtitle">Mechano-chemical selections of two competitive unfolding pathways of a single DNA i-motif </span>
      <span class="pubauthor">Y Xu, H Chen, Y Qu, AK Efremov, M Li, ZC Ouyang, DS Liu, J Yan  </span>
      <span class="pubjournal">Chinese Physics B </span>
      <span class="doi"><a href="https://doi.org/10.1088/1674-1056/23/6/068702" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--51-->
    <td>
      <span class="pubtitle">Locus of Enterocyte Effacement-encoded Regulator (Ler) of Pathogenic Escherichia coli Competes Off Histone-like Nucleoid-structuring Protein (H-NS) through Noncooperative DNA Binding </span>
      <span class="pubauthor">RS Winardhi, R Gulvady, JL Mellies, J Yan </span>
      <span class="pubjournal">Journal of Biological Chemistry </span>
      <span class="doi"><a href="https://doi.org/10.1074/jbc.M113.545954" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--50-->
    <td>
      <span class="pubtitle">Mechanical activation of vinculin binding to talin locks talin in an unfolded conformation </span>
      <span class="pubauthor">M Yao, BT Goult, H Chen, P Cong, MP Sheetz, J Yan </span>
      <span class="pubjournal">Scientific Reports  </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep04610" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--49-->
    <td>
      <span class="pubtitle">Effect of YOYO-1 on the mechanical properties of DNA </span>
      <span class="pubauthor">B Kundukad, J Yan, PS Doyle </span>
      <span class="pubjournal">Soft Matter </span>
      <span class="doi"><a href="https://doi.org/10.1039/C4SM02025A" title="doi" target="_blank">link</a></span>
    </td>
    <td>2014</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--48-->
    <td>
      <span class="pubtitle">Mechanosensing of DNA bending in a single specific protein-DNA complex </span>
      <span class="pubauthor">S Le, H Chen, P Cong, J Lin, P Dröge, J Yan </span>
      <span class="pubjournal">Scientific Reports </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep03508" title="doi" target="_blank">link</a></span>
    </td>
    <td>2013</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--47-->
    <td>
      <span class="pubtitle">Dynamics and Regulation of RecA Polymerization and De-Polymerization on Double-Stranded DNA </span>
      <span class="pubauthor">H Fu, S Le, K Muniyappa, J Yan </span>
      <span class="pubjournal">PLoS ONE </span>
      <span class="doi"><a href="https://doi.org/10.1371/journal.pone.0066712" title="doi" target="_blank">link</a></span>
    </td>
    <td>2013</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--46-->
    <td>
      <span class="pubtitle">Mechanism of DNA organization by Mycobacterium tuberculosis protein Lsr2 </span>
      <span class="pubauthor">Y Qu, CJ Lim, YR Whang, J Liu, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkt249" title="doi" target="_blank">link</a></span>
    </td>
    <td>2013</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--45-->
    <td>
      <span class="pubtitle">Mechanical perturbation of filamin A immunoglobulin repeats 20-21 reveals potential non-equilibrium mechanochemical partner binding function </span>
      <span class="pubauthor">H Chen, S Chandrasekar, MP Sheetz, TP Stossel, F Nakamura, J Yan </span>
      <span class="pubjournal">Scientific Reports </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep01642" title="doi" target="_blank">link</a></span>
    </td>
    <td>2013</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--44-->
    <td>
      <span class="pubtitle">Revealing the competition between peeled ssDNA, melting bubbles, and S-DNA during DNA overstretching by single-molecule calorimetry </span>
      <span class="pubauthor">X Zhang, H Chen, S Le, I Rouzina, PS Doyle, J Yan </span>
      <span class="pubjournal">PNAS </span>
      <span class="doi"><a href="http://www.pnas.org/content/110/10/3865.short" title="doi" target="_blank">link</a></span>
    </td>
    <td>2013</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--43-->
    <td>
      <span class="pubtitle">Force and ATP hydrolysis dependent regulation of RecA nucleoprotein filament by single-stranded DNA binding protein </span>
      <span class="pubauthor">H Fu, S Le, H Chen, K Muniyappa, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gks1162" title="doi" target="_blank">link</a></span>
    </td>
    <td>2013</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--42-->
    <td>
      <span class="pubtitle">The nucleoid-associated protein Dan organizes chromosomal DNA through rigid nucleoprotein filament formation in E. coli during anoxia </span>
      <span class="pubauthor">CJ Lim, SY Lee, J Teramoto, A Ishihama, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gks1126" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--41-->
    <td>
      <span class="pubtitle">Impact of DNA Twist Accumulation on Progressive Helical Wrapping of Torsionally Constrained DNA </span>
      <span class="pubauthor">W Li, PY Wang, J Yan, M Li </span>
      <span class="pubjournal">Physical Review Letters </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevLett.109.218102" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--40-->
    <td>
      <span class="pubtitle">Physical Organization of DNA by Multiple Non-Specific DNA-Binding Modes of Integration Host Factor (IHF) </span>
      <span class="pubauthor">J Lin, H Chen, P Dröge, J Yan </span>
      <span class="pubjournal">PLoS ONE </span>
      <span class="doi"><a href="https://doi.org/10.1371/journal.pone.0049885" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--39-->
    <td>
      <span class="pubtitle">Single-Molecule DNA Analysis Reveals That Yeast Hop1 Protein Promotes DNA Folding and Synapsis: Implications for Condensation of Meiotic Chromosomes </span>
      <span class="pubauthor">K Khan, U Karthikeyan, Y Li, J Yan, K Muniyappa </span>
      <span class="pubjournal">ACS Nano </span>
      <span class="doi"><a href="https://doi.org/10.1021/nn3038258" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--38-->
    <td>
      <span class="pubtitle">Nucleoprotein filament formation is the structural basis for bacterial protein H-NS gene silencing </span>
      <span class="pubauthor">CJ Lim, SY Lee, LJ Kenney, J Yan </span>
      <span class="pubjournal">Scientific Reports </span>
      <span class="doi"><a href="https://doi.org/10.1038/srep00509" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--37-->
    <td>
      <span class="pubtitle">Higher order oligomerization is required for H-NS family member MvaT to form gene-silencing nucleoprotein filament </span>
      <span class="pubauthor">RS Winardhi, W Fu, S Castang, Y Li, SL Dove, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gks669" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--36-->
    <td>
      <span class="pubtitle">Two distinct overstretched DNA structures revealed by single-molecule thermodynamics measurements </span>
      <span class="pubauthor">X Zhang, H Chen, H Fu, PS Doyle, J Yan </span>
      <span class="pubjournal">PNAS </span>
      <span class="doi"><a href="http://www.pnas.org/content/109/21/8103.short" title="doi" target="_blank">link</a></span>
    </td>
    <td>2012</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--35-->
    <td>
      <span class="pubtitle">Gene silencing H-NS paralogue StpA forms a rigid protein filament along DNA that blocks DNA accessibility </span>
      <span class="pubauthor">CJ Lim, YR Whang, LJ Kenney, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkr1247" title="doi" target="_blank">link</a></span>
    </td>
    <td>2011</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--34-->
    <td>
      <span class="pubtitle">Differential Mechanical Stability of Filamin A Rod Segments </span>
      <span class="pubauthor">H Chen, X Zhu, P Cong, MP Sheetz, F Nakamura, J Yan </span>
      <span class="pubjournal">Biophysical Journal </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.bpj.2011.07.028" title="doi" target="_blank">link</a></span>
    </td>
    <td>2011</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--33-->
    <td>
      <span class="pubtitle">Atomic force microscope imaging of chromatin assembled in Xenopus laevis egg extract </span>
      <span class="pubauthor">H Fu, BS Freedman, CT Lim, R Heald, J Yan </span>
      <span class="pubjournal">Chromosoma </span>
      <span class="doi"><a href="https://doi.org/10.1007/s00412-010-0307-4" title="doi" target="_blank">link</a></span>
    </td>
    <td>2011</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--32-->
    <td>
      <span class="pubtitle">Transition dynamics and selection of the distinct S-DNA and strand unpeeling modes of double helix overstretching </span>
      <span class="pubauthor">H Fu, H Chen, X Zhang, Y Qu, JF Marko, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkq1278" title="doi" target="_blank">link</a></span>
    </td>
    <td>2011</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--31-->
    <td>
      <span class="pubtitle">Salmonella enterica response regulator SsrB relieves H-NS silencing by displacing H-NS bound in polymerization mode and directly activates transcription </span>
      <span class="pubauthor">D Walthers, Y Li, Y Liu, G Anand, J Yan, LJ Kenney </span>
      <span class="pubjournal">Journal of Biological Chemistry </span>
      <span class="doi"><a href="https://doi.org/10.1074/jbc.M110.164962" title="doi" target="_blank">link</a></span>
    </td>
    <td>2011</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--30-->
    <td>
      <span class="pubtitle">Improved High-Force Magnetic Tweezers for Stretching and Refolding of Proteins and Short DNA </span>
      <span class="pubauthor">H Chen, H Fu, X Zhu, P Cong, F Nakamura, J Yan </span>
      <span class="pubjournal">Biophysical Journal </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.bpj.2010.12.3700" title="doi" target="_blank">link</a></span>
    </td>
    <td>2011</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--29-->
    <td>
      <span class="pubtitle">DNA condensates organized by the capsid protein VP15 in White Spot Syndrome Virus </span>
      <span class="pubauthor">Y Liu, J Wu, H Chen, CL Hew, J Yan </span>
      <span class="pubjournal">Virology </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.virol.2010.09.008" title="doi" target="_blank">link</a></span>
    </td>
    <td>2010</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--28-->
    <td>
      <span class="pubtitle">Non-Harmonic DNA Bending Elasticity is Revealed by Statistics of DNA Minicircle Shapes </span>
      <span class="pubauthor">H Chen, H Fu, Z Zhou, J Yan </span>
      <span class="pubjournal">International Journal of Modern Physics B </span>
      <span class="doi"><a href="https://doi.org/10.1142/S0217979210056682" title="doi" target="_blank">link</a></span>
    </td>
    <td>2010</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--27-->
    <td>
      <span class="pubtitle">Two distinct overstretched DNA states </span>
      <span class="pubauthor">H Fu, H Chen, JF Marko, J Yan </span>
      <span class="pubjournal">Nucleic Acids Research </span>
      <span class="doi"><a href="https://doi.org/10.1093/nar/gkq309" title="doi" target="_blank">link</a></span>
    </td>
    <td>2010</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--26-->
    <td>
      <span class="pubtitle">Salt Solution Effects on Overstretching Transitions of DNA Molecules </span>
      <span class="pubauthor">H Fu, H Chen, J Yan, CT Lim </span>
      <span class="pubjournal">Journal of Computational and Theoretical Nanoscience </span>
      <span class="doi"><a href="https://doi.org/10.1166/jctn.2010.1480" title="doi" target="_blank">link</a></span>
    </td>
    <td>2010</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--25-->
    <td>
      <span class="pubtitle">A divalent switch drives H-NS/DNA-binding conformations between stiffening and bridging modes </span>
      <span class="pubauthor">Y Liu, H Chen, LJ Kenney, J Yan </span>
      <span class="pubjournal">Genes & development </span>
      <span class="doi"><a href="http://genesdev.cshlp.org/content/24/4/339" title="doi" target="_blank">link</a></span>
    </td>
    <td>2010</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--24-->
    <td>
      <span class="pubtitle">Temperature dependence of circular DNA topological states </span>
      <span class="pubauthor">H Chen, Y Liu, Z Zhou, L Hu, ZC Ou-Yang, J Yan </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.79.041926" title="doi" target="_blank">link</a></span>
    </td>
    <td>2009</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--23-->
    <td>
      <span class="pubtitle">A Solution to a Single Molecular Experiment Problem </span>
      <span class="pubauthor">Y Liu, H Chen, L Hu, ZC Ou-Yang, J Yan </span>
      <span class="pubjournal">Communications in Computatoinal Physics </span>
      <span class="doi"><a href="http://ir.itp.ac.cn/handle/311006/5254" title="doi" target="_blank">link</a></span>
    </td>
    <td>2009</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--22-->
    <td>
      <span class="pubtitle">A contractile DNA machine </span>
      <span class="pubauthor">D Lubrich, J Lin, J Yan </span>
      <span class="pubjournal">Angewandte Chemie International Edition </span>
      <span class="doi"><a href="https://doi.org/10.1002/anie.200800476" title="doi" target="_blank">link</a></span>
    </td>
    <td>2008</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--21-->
    <td>
      <span class="pubtitle">Effects of kink and flexible hinge defects on mechanical responses of short double-stranded DNA molecules </span>
      <span class="pubauthor">H Chen, J Yan </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.77.041907" title="doi" target="_blank">link</a></span>
    </td>
    <td>2008</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--20-->
    <td>
      <span class="pubtitle">Nucleosome hopping and sliding kinetics determined from dynamics of single chromatin fibers in Xenopus egg extracts </span>
      <span class="pubauthor">P Ranjith, J Yan, JF Marko </span>
      <span class="pubjournal">PNAS </span>
      <span class="doi"><a href="http://www.pnas.org/content/104/34/13649.short" title="doi" target="_blank">link</a></span>
    </td>
    <td>2007</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--19-->
    <td>
      <span class="pubtitle">A divalent metal-mediated switch controlling protein-induced DNA bending </span>
      <span class="pubauthor">Q Bao, H Chen, Y Liu, J Yan, P Dröge, CA Davey </span>
      <span class="pubjournal">Journal of Molecular Biology </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.jmb.2006.09.082" title="doi" target="_blank">link</a></span>
    </td>
    <td>2007</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--18-->
    <td>
      <span class="pubtitle">Micromanipulation studies of chromatin fibers in Xenopus egg extracts reveal ATP-dependent chromatin assembly dynamics </span>
      <span class="pubauthor">J Yan, TJ Maresca, D Skoko, CD Adams, B Xiao, MO Christensen, R Heald, JF Marko </span>
      <span class="pubjournal">Molecular Biology of the Cell </span>
      <span class="doi"><a href="https://doi.org/10.1091/mbc.E06-09-0800" title="doi" target="_blank">link</a></span>
    </td>
    <td>2007</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--17-->
    <td>
      <span class="pubtitle">Mechanism of chromosome compaction and looping by the Escherichia coli nucleoid protein Fis </span>
      <span class="pubauthor">D Skoko, D Yoo, H Bai, B Schnurr, J Yan, SM McLeod, JF Marko, RC Johnson </span>
      <span class="pubjournal">Journal of Molecular Biology </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.jmb.2006.09.043" title="doi" target="_blank">link</a></span>
    </td>
    <td>2006</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--16-->
    <td>
      <span class="pubtitle">Compaction dynamics of single DNA molecules under tension </span>
      <span class="pubauthor">WB Fu, XL Wang, XH Zhang, SY Ran, J Yan, M Li </span>
      <span class="pubjournal">Journal of the American Chemical Society </span>
      <span class="doi"><a href="https://doi.org/10.1021/ja064305a" title="doi" target="_blank">link</a></span>
    </td>
    <td>2006</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--15-->
    <td>
      <span class="pubtitle">Low-force DNA condensation and discontinuous high-force decondensation reveal a loop-stabilizing function of the protein Fis </span>
      <span class="pubauthor">D Skoko, J Yan, RC Johnson, JF Marko </span>
      <span class="pubjournal">Physical Review Letters </span>
      <span class="doi"><a href="" title="doi" target="_blank">link</a></span>
    </td>
    <td>2005</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--14-->
    <td>
      <span class="pubtitle">Statistics of loop formation along double helix DNAs </span>
      <span class="pubauthor">J Yan, R Kawamura, JF Marko </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.71.061905" title="doi" target="_blank">link</a></span>
    </td>
    <td>2005</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--13-->
    <td>
      <span class="pubtitle">Defining a centromere-like element in Bacillus subtilis by identifying the binding sites for the chromosome-anchoring protein RacA </span>
      <span class="pubauthor">S Ben-Yehuda, M Fujita, XS Liu, B Gorbatyuk, D Skoko, J Yan, JF Marko, JS Liu, P Eichenberger, DZ Rudner, R Losick </span>
      <span class="pubjournal">Molecular cell </span>
      <span class="doi"><a href="https://doi.org/10.1016/j.molcel.2005.02.023" title="doi" target="_blank">link</a></span>
    </td>
    <td>2005</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--12-->
    <td>
      <span class="pubtitle">Localized single-stranded bubble mechanism for cyclization of short double helix DNA </span>
      <span class="pubauthor">J Yan, JF Marko </span>
      <span class="pubjournal">Physical Review Letters </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevLett.93.108108" title="doi" target="_blank">link</a></span>
    </td>
    <td>2004</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--11-->
    <td>
      <span class="pubtitle">Overstretching and force-driven strand separation of double-helix DNA </span>
      <span class="pubauthor"> </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.70.011910" title="doi" target="_blank">link</a></span>
    </td>
    <td>2004</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--10-->
    <td>
      <span class="pubtitle">Near-field-magnetic-tweezer manipulation of single DNA molecules </span>
      <span class="pubauthor">J Yan, D Skoko, JF Marko </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.70.011905" title="doi" target="_blank">link</a></span>
    </td>
    <td>2004</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--9-->
    <td>
      <span class="pubtitle">Effects of DNA-distorting proteins on DNA elastic response </span>
      <span class="pubauthor">J Yan, JF Marko </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.68.011905" title="doi" target="_blank">link</a></span>
    </td>
    <td>2003</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--8-->
    <td>
      <span class="pubtitle">Force-extension behavior of folding polymers </span>
      <span class="pubauthor">S Cocco, JF Marko, R Monasson, A Sarkar, J Yan </span>
      <span class="pubjournal">The European Physical Journal E </span>
      <span class="doi"><a href="https://doi.org/10.1140/epje/i2002-10113-2" title="doi" target="_blank">link</a></span>
    </td>
    <td>2003</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--7-->
    <td>
      <span class="pubtitle">Kinetic proofreading can explain the supression of supercoiling of circular DNA molecules by type-II topoisomerases </span>
      <span class="pubauthor">J Yan, MO Magnasco, JF Marko </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.63.031909" title="doi" target="_blank">link</a></span>
    </td>
    <td>2001</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--6-->
    <td>
      <span class="pubtitle">A kinetic proofreading mechanism for disentanglement of DNA by topoisomerases </span>
      <span class="pubauthor">J Yan, MO Magnasco, JF Marko </span>
      <span class="pubjournal">Nature </span>
      <span class="doi"><a href="https://doi.org/10.1038/44872" title="doi" target="_blank">link</a></span>
    </td>
    <td>1999</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--5-->
    <td>
      <span class="pubtitle">Numerical observation of nonaxisymmetric vesicles in fluid membranes </span>
      <span class="pubauthor">J Yan, Q Liu, J Liu, ZC Ouyang </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.58.4730" title="doi" target="_blank">link</a></span>
    </td>
    <td>1998</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--4-->
    <td>
      <span class="pubtitle">Instability and periodic deformation in bilayer membranes induced by freezing </span>
      <span class="pubauthor">J Yan, H Zhou, ZC Ouyang </span>
      <span class="pubjournal">Modern Physics Letters B </span>
      <span class="doi"><a href="https://doi.org/10.1142/S0217984998000202" title="doi" target="_blank">link</a></span>
    </td>
    <td>1998</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--3-->
    <td>
      <span class="pubtitle">Stabilizing unstable orbits </span>
      <span class="pubauthor">H Zhao, Y Wang, J Yan </span>
      <span class="pubjournal">Physical Letters A </span>
      <span class="doi"><a href="https://doi.org/10.1016/S0375-9601(97)00681-6" title="doi" target="_blank">link</a></span>
    </td>
    <td>1997</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--2-->
    <td>
      <span class="pubtitle">Nonlinear differential delay equations using the Poincaré section technique </span>
      <span class="pubauthor">H Zhao, F Zhang, J Yan, Y Wang </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.54.6925" title="doi" target="_blank">link</a></span>
    </td>
    <td>1996</td>
  </tr>
    `},
    {PublicationItem: `
  <tr><!--1-->
    <td>
      <span class="pubtitle">General method of controlling chaos </span>
      <span class="pubauthor">H Zhao, J Yan, J Wang, Y Wang  </span>
      <span class="pubjournal">Physical Review E </span>
      <span class="doi"><a href="https://doi.org/10.1103/PhysRevE.53.299" title="doi" target="_blank">link</a></span>
    </td>
    <td>1996</td>
  </tr>
    `},
];