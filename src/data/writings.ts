export interface WritingPost {
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  image: string
  titleZh: string
  content: string[]
  contentZh: string[]
}

// Add or edit Writing posts here.
// Each slug becomes a page at /blog/writings/[slug].
export const WRITINGS: WritingPost[] = [
  {
  title: 'The Night of CHI27',
  date: '2026-09-11',
  slug: 'The_Night_of_CHI27',
  excerpt: 'After submitting my CHI27 manuscript, I found myself thinking about departing friends, the quiet fatigue of research, and a participant whose words reminded me why this work matters.',
  category: 'Research Reflections',
  readTime: '5 min read',
  image: '/images/Writings/7f93c52f7bfd4b983cb28255894f065f.png',
  titleZh: 'CHI27之夜',

  content: [
    'September 11. The date I had been repeating to myself for so long had finally arrived. “Complete submission.” A comma at the end of everything, a moment to breathe. I went home, cooked dinner, did the laundry, and lay down as usual. But sleep would not come.',

    '“Summer is over,” a friend said. In one sense, it was. The CHI manuscripts were submitted, and many friends would soon leave, returning to their universities or home countries to pick up the main threads of their lives. In another sense, it was not. Summer in Hong Kong would last another month. I would still be walking its sunlit streets with my shadow, wondering who would still be around to meet.',

    'HCI has always been a field people argue about. As a newcomer, I am learning how to make research rigorous and inclusive while finding my footing amid dismissive attitudes toward the field and its career prospects. Sometimes I feel tired. Sometimes I lose heart. Sometimes I wonder whether what I do matters at all. What if a new model appears tomorrow and makes my research obsolete overnight?',

    'Over time, research life can feel like a sheet of paper soaking in the basin where ink brushes are rinsed. Day after day, a little more gray seeps into it.',

    'Recently, a participant with hearing loss brought some light into a corner of that life. I met her while helping a friend run a study. After the session, I walked her out through the workstations, crowded with machines and gadgets like some peculiar beehive. She paused in the automatic doorway, turned back, and smiled. “I feel like everyone here is a superbrain. You really are doing things that change the world.” The glass doors slowly closed, casting a pale tint over the hearing device at her hairline. Her final goodbye stayed on the other side. But “things that change the world” lodged in my mind. I kept returning to those words over the next few days.',

    'The system she had tested was nowhere near a finished product. Even calling it a prototype felt generous. Yet every participant gave positive overall feedback. One said excitedly, “I feel like it is smarter than me!” Another asked when it would be available on their phone. None of this was what I had expected.',

    'I began to wonder whether I had been arrogant. I had been so focused on scientific grounding, validation, and evaluation that I had left little room for these responses. Hearing what the system might mean to someone was more immediate, and more joyful, than I had anticipated. I felt like a robot with an empty battery, connected to a thin cable, happily drawing power again.',

    'Back in my own project, that feeling was quieter. I returned to the familiar questions: Which method should I use? How should I analyze the data? Am I overclaiming? Still, one of the things I value most about HCI is the chance to encounter real people. Whether I am reading someone else’s reflections or meeting participants whose lives would otherwise never cross mine, these encounters open cracks in my enclosed thoughts and let unexpected colors in.',

    'At a time when AI can quickly take over so much of our digital work, these encounters encourage me to hold on to my own judgment. To see, talk, touch, and experience things more directly.',

    'Do something as though it could change the world.',

    'Summer is over. There will be countless summers still to come.'
  ],

  contentZh: [
    '9月11日。这个念叨了很久的锚点，终于来临。“Complete submission”，给一切画上逗号，我松了口气。回到家，照常做饭、洗衣、躺下，却难以入眠。',

    '“夏天结束了。”一位朋友如是说。一方面，是的，夏天结束了。CHI稿件已经提交，很多朋友即将离开，回到他们的学校或母国，继续各自的人生主线。另一方面，又不是。香港的夏天还要持续一个月，而我将和自己的影子一起走在艳阳高照的街上，不知还能赴谁的约。',

    'HCI一直是个饱受争议的领域。作为初学者，我一边学习如何确保研究的严谨与包容，一边在对这个领域及其就业前景不乏偏见的舆论中寻找自己的位置。偶尔疲惫，偶尔倦怠，偶尔也想：自己做的事真的有意义吗？会不会明天就出现一个新模型，立刻取代我的研究？',

    '长期的科研生活，像一张泡在洗墨池里的纸。日积月累，一点点浸上灰色的底色。',

    '最近点亮生活一角的，是帮朋友做实验时遇到的一位听障用户。实验结束，我照例送她穿过那片塞满机器和玩意、像古怪蜂房般的工位。她站在感应门中间，回头望着我笑：“我觉得你们这里都是‘最强大脑’诶，你们是真的在做改变世界的事。”玻璃门缓缓关上，给她发际的助听设备蒙上一层浅色滤镜，最后的“拜拜”已被隔断在另一侧空气里。可那句“改变世界的事”一下钻进我的脑海，在接下来的几天里，被我反复咀嚼。',

    '她测试的系统远算不上完整产品，甚至只能勉强称为原型。但所有参与者都给出了积极的整体反馈。有人兴奋地说：“我感觉它比我聪明诶！”有人问，什么时候可以在手机上使用。这一切都出乎我的意料。',

    '我开始想，自己是不是太傲慢了？专心盯着理论依据，用力盯着验证与评估，却给这些真实的回应留下了太少的位置。听到一个系统可能对某个人意味着什么，比我预想的更直接，也更让人幸福。我像电量耗尽的机器人，插上一根细细的电缆，开始愉悦地汲取电力。',

    '切回自己的项目，这种感觉就平淡得多。我又回到那套熟悉的严谨框架里：用什么方法，如何分析，是否过度宣称……但HCI最让我珍惜的一点，是能接触到真实的人。不管是阅读他人的思考，还是在实验中遇到原本不会有交集的人，这些接触都在我封闭的思绪上撕开一条裂缝，把光怪陆离的颜色照进来。',

    '在越来越多数字工作都可以由AI快速代劳的年代，这些交集激励我保留自己的判断力，用更真实的方式去看见、交流、触碰、体验。',

    '做一件事，像它可以改变世界一样去做。',

    '夏天结束了。接下来，还会有无数个夏天。'
  ]
},


  
  {
    title: 'Hubs Avatar Animation: How It Works and How to Extend It',
    date: '2026-07-06',
    slug: 'Hubs_Avatar_Animation',
    excerpt: 'Learn how to set up a modern web application using Next.js and TypeScript. This comprehensive guide covers everything from project initialization to deployment.',
    category: 'Web Development',
    readTime: '7 min read',
    image: '/images/Writings/Hubs avatar.png',
    titleZh: 'Hubs 头像动画机制：它如何工作，以及如何扩展',
    
  content: [
    'In Mozilla Hubs / Hubs Foundation codebases, avatar animation is not driven by a single centralized "avatar animation state machine." Instead, it is built from several smaller systems: glTF animation playback, IK, networked hand poses, and audio-driven feedback.',
    '1. Imported glTF Animations',
    'When a GLB or glTF model contains animation clips, Hubs creates a THREE.AnimationMixer for that model. The mixer is created by the gltf-model-plus component after the model has loaded.',
    'The main playback component is loop-animation. It selects one or more animation clips and plays them with LoopRepeat and Infinity. In other words, the selected clip loops forever.',
    'If no explicit clip is configured, the default behavior is to play the first animation clip, usually activeClipIndex 0. So if the first animation in your imported avatar is named Idle, that Idle animation will loop.',
    'Important detail: this does not mean Hubs detects that the avatar is "not speaking" and then starts Idle. It simply means the configured/default loop animation plays continuously.',
    '2. Avatar Body Motion Is Mostly IK',
    'For avatars in a room, Hubs does not usually synchronize full skeletal animation data across the network. Instead, it synchronizes the transforms of the avatar rig, camera, and controllers.',
    'The remote side receives those transforms and runs IK locally. This is how other users see your head, body, and hands move. The movement is reconstructed from input poses, not streamed as baked animation frames.',
    'This design is efficient. It sends compact input data over the network and lets each client solve the avatar pose locally.',
    '3. Hand Poses Are Networked as State',
    'Hand animation is a special case. Hubs defines a networked-avatar component with two fields: left_hand_pose and right_hand_pose.',
    'Local controller input writes to these fields. Remote clients receive the values through the Networked-AFrame schema and play the matching hand pose clips locally.',
    'So hand animation is not synchronized as animation time or animation tracks. It is synchronized as a small state value, such as open hand, fist, point, or pinch.',
    '4. Speaking Is Audio-Driven, Not Clip-Driven',
    'Speaking animation in Hubs is not automatically implemented as "switch from Idle to Talk animation." Instead, Hubs receives or sends audio streams and uses audio analysers to estimate volume.',
    'The networked-audio-analyser component calculates a volume value for remote avatars. The local-audio-analyser system does something similar for the local user.',
    'That volume can then drive visual feedback, for example: scaling a speaking indicator, changing name tag speaking state, driving a mouth morph target through morph-audio-feedback.',
    'This is useful for lip or mouth movement, but it is different from switching between full body animation clips.',
    '5. What Gets Synchronized to Other Users?',
    'For the remote-avatar template, Hubs synchronizes avatar rig position, rotation, and scale; camera position and rotation; left controller position, rotation, and visibility; right controller position, rotation, and visibility; player-info; networked-avatar.',
    'It does not synchronize the current AnimationMixer clip, current animation time, or active AnimationAction by default.',
    'This means that if you add a custom avatar animation state, you should synchronize the state, not the animation playback internals.',
    '6. Can We Add Idle, Speaking, Thinking, Listening, and Other States?',
    'Yes. The recommended approach is to add a small avatar animation controller.',
    'The controller can read a state such as idle, listening, thinking, speaking, reacting.',
    'Then it can find the matching THREE.AnimationClip and transition between clips using fadeOut, reset, fadeIn, and play.',
    'For networking, add a field to networked-avatar, for example: animation_state: "idle".',
    'Each client can then switch the local animation clip based on that state.',
    '7. Suggested Architecture for Agent Avatars',
    'For an AI agent avatar, a clean architecture would be: idle, listening, thinking, speaking, reacting, plus special events like wave, nod, confused, celebrate.',
    'The agent logic should set a semantic state. The avatar animation controller translates that state into actual animation clips.',
    'This separation keeps the system flexible and decoupled between AI logic and animation implementation.',
    '8. Practical Notes',
    'Keep Idle as fallback animation.',
    'Use semantic states instead of raw clip names for networking.',
    'Use audio-driven morph targets for mouth movement and clip switching for larger gestures.',
    'Do not synchronize every animation frame; synchronize intent or state instead.',
    'Summary',
    'Hubs avatar animation is a hybrid system combining glTF looping animations, IK-based body reconstruction, networked hand states, and audio-driven speaking feedback.',
    'The best design for richer avatars is to synchronize semantic animation states and let each client handle local playback and transitions.'
  ],

  contentZh: [
    '在 Mozilla Hubs / Hubs Foundation 的代码中，avatar 动画并不是由一个统一的“动画状态机”驱动的，而是由多个小系统组合而成：glTF 动画播放、IK、网络手势状态以及音频驱动反馈。',
    '1. 导入的 glTF 动画',
    '当 GLB 或 glTF 模型包含动画片段时，Hubs 会为该模型创建 THREE.AnimationMixer。该 mixer 在模型加载完成后由 gltf-model-plus 组件创建。',
    '主要播放组件是 loop-animation，它会选择一个或多个动画片段，并用 LoopRepeat 和 Infinity 循环播放。',
    '如果没有显式配置 clip，则默认播放第一个动画片段（通常是 activeClipIndex 0），例如 Idle 动画会被持续循环。',
    '重要的是：这并不意味着 Hubs 会检测“没有说话”然后切 Idle，它只是持续播放默认动画。',
    '2. Avatar 身体动作主要依赖 IK',
    '在房间中，Hubs 通常不会同步完整骨骼动画数据，而是同步 avatar rig、camera 和 controller 的 transform。',
    '远端客户端接收到这些数据后在本地运行 IK，从而重建头部、身体和手部动作。',
    '这种方式更高效，只传输输入数据，由各端本地解算姿态。',
    '3. 手势以状态形式同步',
    'Hubs 的 networked-avatar 组件包含两个字段：left_hand_pose 和 right_hand_pose。',
    '本地控制器输入写入这些字段，远端通过 Networked-AFrame 接收后在本地播放对应手势。',
    '因此手势不是同步动画时间或动画轨道，而是同步一个小状态值，如张手、握拳、指向或捏合。',
    '4. 说话动画由音频驱动，而不是 clip 切换',
    '说话动画不是 Idle → Talk 的自动切换，而是通过音频流和音量分析实现。',
    'networked-audio-analyser 会计算远端 avatar 的音量，本地也会进行类似处理。',
    '这个音量可以驱动 UI 或嘴部 morph target，例如说话指示器、name tag 状态、嘴部形变。',
    '但这和完整动画 clip 切换是不同的。',
    '5. 同步给其他用户的数据',
    'Hubs 只同步 avatar rig transform、camera transform、controller transform、player-info 和 networked-avatar 状态。',
    '默认不会同步 AnimationMixer 的 clip、播放时间或 AnimationAction。',
    '因此新增动画状态时，应该同步“状态”而不是动画内部细节。',
    '6. 是否可以加入 Idle / Speaking / Thinking 等状态？',
    '可以。推荐做一个轻量 animation controller。',
    'controller 读取 idle、listening、thinking、speaking、reacting 等语义状态。',
    '然后通过 fadeOut、reset、fadeIn、play 在不同动画之间切换。',
    '在网络层可以加入 animation_state 字段，例如 "idle"。',
    '每个客户端根据该状态切换本地动画。',
    '7. Agent Avatar 架构建议',
    '推荐状态包括 idle、listening、thinking、speaking、reacting，以及 wave、nod、confused 等事件。',
    'AI 只负责设置语义状态，动画层负责映射到具体 clip。',
    '这样可以解耦 AI 与动画实现细节。',
    '8. 实践建议',
    'Idle 作为 fallback 动画。',
    '网络同步使用语义状态而不是 clip 名称。',
    '嘴部用音频驱动 morph target，大动作用动画 clip 切换。',
    '不要同步每一帧动画，只同步状态或意图。',
    '总结',
    'Hubs avatar 动画是一个混合系统：glTF 动画循环 + IK 重建 + 手势状态同步 + 音频驱动说话反馈。',
    '更好的做法是同步语义状态，由各客户端本地执行动画播放与过渡。'
  ]
}

]
