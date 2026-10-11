import{M as e}from"./components-C_sIunhv.js";var t={dataFiduciary:`Zycus`,defaultGrievanceContact:`the Zycus Talent Acquisition contact in your invitation email`,consent:{version:`2026-10-10.1`,markdown:`### Notice and consent for processing your personal data

**{{dataFiduciary}}** ("Zycus", "we") is the data fiduciary for this assessment. This notice explains what we collect while you take the **{{assessmentName}}**, why, and your rights. It is written in line with India's Digital Personal Data Protection Act, 2023.

**Purpose.** We use your data only to (a) assess your application for the role you applied for and (b) make sure the assessment was taken fairly and under the stated rules.

**What we collect:**

1. **Identity and contact:** your name and email address, which our Talent Acquisition team provided when inviting you.
2. **Your work:** the code you write, the results when you run the tests, and a timed record of your edits (keystroke timing and changes) so reviewers can replay how you solved each task.
3. **Coding assistant:** if you use it, your questions, any code you choose to include, and its answers. They are processed by the AI service Zycus provides for this assessment and are shown to reviewers.
4. **Webcam snapshots:** low-resolution still images taken about every {{snapshotMinutes}} minutes and when a rule appears to be broken. **No video or audio is recorded or streamed.**
5. **Face presence:** your browser checks on your own device whether zero, one or more faces are visible. Only that count is sent. **We never identify you from your face or compare it with any database.**
6. **Test-integrity events:** for example switching tabs or windows, leaving full screen, attempted pasting, extra displays, and when your camera stops. Each is recorded with the time and duration.
7. **Device information:** browser, operating system, screen size and display set-up.
8. **Network information:** your IP address, stored only as a one-way hash, used to prevent misuse of access codes and deleted after 24 hours.

**Where it is stored and who sees it.** Your data is stored with our service provider Supabase in **Mumbai, India**. Only authorised Zycus hiring staff (Talent Acquisition and the interview panel assigned to you) can access it. We do not sell it or use it for any other purpose.

**How long we keep it.** Webcam snapshots are deleted after **{{snapshotRetentionDays}} days**. Your assessment record is deleted after **{{retentionDays}} days**, unless a law requires us to keep it longer.

**Your rights.** You may ask to access, correct or erase your data, withdraw your consent, or raise a grievance by contacting **{{grievanceContact}}**. You may also complain to the **Data Protection Board of India**. Withdrawing consent ends the assessment. It does not affect processing that already happened.

**Your choice.** Giving consent is voluntary. If you do not agree, do not start the assessment. Contact the Talent Acquisition team to discuss alternatives.
`},confidentiality:{version:`2026-10-09.1`,markdown:`### Confidentiality

The questions, code and other material in this assessment are **confidential information of Zycus**.

- Don't copy, photograph, record, publish or share any part of them, during or after the assessment, with anyone, including on forums, social media or AI tools.
- The screen carries a watermark with your name and email, so any shared image can be traced back to this session.
- Breaching confidentiality may lead to your application being disqualified.
`},thankYou:{markdown:`Your assessment has been submitted and safely received. Thank you for the time and effort you put into it.

**Our talent team will get in touch with you** about the next steps. You don't need to do anything else now. You can close this window.
`}};function n(n,r){let i={dataFiduciary:t.dataFiduciary,assessmentName:e.assessmentName,grievanceContact:r.grievanceContact,retentionDays:String(r.retentionDays),snapshotRetentionDays:String(r.snapshotRetentionDays),snapshotMinutes:String(r.snapshotMinutes)};return n.replace(/\{\{(\w+)\}\}/g,(e,t)=>i[t]??e)}function r(e){return`${n(t.consent.markdown,e)}\n\n---\n\n${n(t.confidentiality.markdown,e)}`}var i=()=>`${t.consent.version}+${t.confidentiality.version}`.slice(0,40);export{i as n,t as r,r as t};