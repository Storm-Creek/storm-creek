// STILL WATER — daily morning Tai Chi + Qigong flow (~25 min)
// Opening → Ba Duan Jin (Eight Brocades) → Yang 24 core moves → Closing
// Timed and hands-free: each movement auto-advances on a chime so you can
// keep your eyes off the phone.
// Videos: all from one teacher, QIGONG TAICHI CENTRE (Yogalily Studio) on
// YouTube, opened at the exact second the move starts. Gentle on knees and hips: stay in a high stance.

export const taichiSequence = {
  name: 'STILL WATER',
  description: 'Daily morning Tai Chi and Qigong. Slow, quiet, every day.',
  targetMinutes: 25,
  sections: ['OPENING', 'EIGHT BROCADES', 'TAI CHI', 'CLOSING'],
  movements: [
    // ── OPENING — stand, breathe, loosen ──
    {
      section: 'OPENING', name: 'Wuji Standing', seconds: 60,
      cue: 'Feet shoulder width, knees soft, arms hang. Breathe slow through the nose. Let the shoulders drop.',
      videoSearch: 'wuji standing posture tai chi beginners',
      video: 'BQ42w9NZHfA', videoStart: 12
    },
    {
      section: 'OPENING', name: 'Neck Turns', seconds: 30,
      cue: 'Look left, center, right. Slow. Then tip ear to shoulder each side. No circles.',
      videoSearch: 'qigong neck warm up gentle',
      video: 'mYQ916xX4Os', videoStart: 160
    },
    {
      section: 'OPENING', name: 'Shoulder Rolls', seconds: 30,
      cue: 'Roll back 5, forward 5. Big and slow.',
      videoSearch: 'shoulder rolls qigong warm up',
      video: 'mYQ916xX4Os', videoStart: 160
    },
    {
      section: 'OPENING', name: 'Waist Turns (Swinging Arms)', seconds: 60,
      cue: 'Turn from the waist, let the arms swing loose and tap the body. Feet stay planted.',
      videoSearch: 'tai chi swinging arms waist turning warm up',
      video: 'mYQ916xX4Os', videoStart: 160
    },
    {
      section: 'OPENING', name: 'Ankle Circles', seconds: 30,
      cue: 'Toe on the ground, circle the ankle. Each foot, both directions.',
      videoSearch: 'ankle circles qigong warm up',
      video: 'mYQ916xX4Os', videoStart: 160
    },
    {
      section: 'OPENING', name: 'Raise and Lower the Hands', seconds: 60,
      cue: 'Float the hands up to shoulder height on the inhale, press down on the exhale. 6 slow breaths.',
      videoSearch: 'qigong raising and lowering hands breathing',
      video: 'mYQ916xX4Os', videoStart: 20
    },

    // ── EIGHT BROCADES (Ba Duan Jin) — 6 slow reps each ──
    {
      section: 'EIGHT BROCADES', name: '1. Two Hands Hold Up the Heavens', seconds: 90,
      cue: 'Interlace fingers, press palms to the sky, look up. Lower down the front. 6 reps.',
      videoSearch: 'ba duan jin two hands hold up the heavens',
      video: 'BQ42w9NZHfA', videoStart: 40
    },
    {
      section: 'EIGHT BROCADES', name: '2. Drawing the Bow', seconds: 90,
      cue: 'Step wide, sit a little. Pull one hand back like a bowstring, point the other out and look past it. Alternate. 3 each side.',
      videoSearch: 'ba duan jin drawing the bow to shoot the hawk',
      video: 'BQ42w9NZHfA', videoStart: 132
    },
    {
      section: 'EIGHT BROCADES', name: '3. Separate Heaven and Earth', seconds: 90,
      cue: 'One palm presses up, the other presses down. Switch. 3 each side.',
      videoSearch: 'ba duan jin separate heaven and earth',
      video: 'BQ42w9NZHfA', videoStart: 223
    },
    {
      section: 'EIGHT BROCADES', name: '4. Wise Owl Gazes Back', seconds: 75,
      cue: 'Arms by the sides, palms turn out. Turn the head slowly to look behind. 3 each side.',
      videoSearch: 'ba duan jin wise owl gazes backward',
      video: 'BQ42w9NZHfA', videoStart: 290
    },
    {
      section: 'EIGHT BROCADES', name: '5. Sway the Head and Tail', seconds: 90,
      cue: 'Wide stance, hands on thighs. Lean and circle the upper body side to side. Keep the stance HIGH for the knees. 3 each side.',
      videoSearch: 'ba duan jin sway the head and shake the tail',
      video: 'BQ42w9NZHfA', videoStart: 362
    },
    {
      section: 'EIGHT BROCADES', name: '6. Hands Down the Legs', seconds: 75,
      cue: 'Hands slide down the back and legs as far as is comfortable. Soft knees. Roll back up slowly. 6 reps.',
      videoSearch: 'ba duan jin two hands hold the feet',
      video: 'BQ42w9NZHfA', videoStart: 462
    },
    {
      section: 'EIGHT BROCADES', name: '7. Clench Fists, Fierce Eyes', seconds: 75,
      cue: 'Small horse stance. Punch slowly forward, open the hand, grab, pull back. Eyes wide. Alternate. 3 each side.',
      videoSearch: 'ba duan jin clench fists angry eyes',
      video: 'BQ42w9NZHfA', videoStart: 589
    },
    {
      section: 'EIGHT BROCADES', name: '8. Bounce on the Toes', seconds: 45,
      cue: 'Rise onto the toes, hold, drop gently onto the heels. Small drop. 7 reps.',
      videoSearch: 'ba duan jin bouncing on the toes',
      video: 'BQ42w9NZHfA', videoStart: 650
    },

    // ── TAI CHI — Yang 24 core moves ──
    {
      section: 'TAI CHI', name: 'Commencement', seconds: 60,
      cue: 'Step left foot out. Float arms up to shoulder height, sink the knees a little, press down. Twice.',
      videoSearch: 'yang 24 tai chi commencement beginners',
      video: 'EUcxq8eWke8', videoStart: 0
    },
    {
      section: 'TAI CHI', name: 'Part the Wild Horse\'s Mane', seconds: 120,
      cue: 'Hold the ball, step out, split the hands, top hand forward at eye level. Left, right, left. Repeat.',
      videoSearch: 'part the wild horses mane tai chi tutorial beginners',
      video: 'EUcxq8eWke8', videoStart: 60
    },
    {
      section: 'TAI CHI', name: 'Brush Knee and Push', seconds: 120,
      cue: 'Lower hand brushes past the knee, upper hand pushes forward from the ear. Weight shifts, then step. Repeat.',
      videoSearch: 'brush knee push tai chi tutorial beginners',
      video: 'EUcxq8eWke8', videoStart: 32
    },
    {
      section: 'TAI CHI', name: 'Wave Hands Like Clouds', seconds: 120,
      cue: 'Turn from the waist, hands circle past the face one over the other. Side steps, feet stay parallel.',
      videoSearch: 'wave hands like clouds tai chi tutorial beginners',
      video: 'jGTFq5yaAwU', videoStart: 0
    },
    {
      section: 'TAI CHI', name: 'Repulse Monkey', seconds: 90,
      cue: 'Step back, push forward with the front hand as the rear hand drops. Slow. Look where you step.',
      videoSearch: 'repulse monkey tai chi tutorial beginners',
      video: 'EUcxq8eWke8', videoStart: 12
    },
    {
      section: 'TAI CHI', name: 'Closing Form', seconds: 60,
      cue: 'Cross the hands, open, and float them down. Bring the feet together.',
      videoSearch: 'yang 24 tai chi closing form',
      video: 'EUcxq8eWke8', videoStart: 198
    },

    // ── CLOSING ──
    {
      section: 'CLOSING', name: 'Standing Meditation', seconds: 90,
      cue: 'Hands rest on the lower belly. Breathe into them. Eyes soft or closed.',
      videoSearch: 'zhan zhuang standing meditation beginners',
      video: 'BQ42w9NZHfA', videoStart: 700
    },
    {
      section: 'CLOSING', name: 'Rub Hands, Warm the Face', seconds: 30,
      cue: 'Rub palms until warm, cover the eyes, wash the face upward. Done.',
      videoSearch: 'qigong closing rub hands face massage',
      video: 'BQ42w9NZHfA', videoStart: 700
    }
  ]
};
