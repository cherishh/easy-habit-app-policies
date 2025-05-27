export default function PrivacyPolicyPage() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-3xl font-bold mb-6 text-center'>隐私政策</h1>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>EasyHabit 隐私政策</h2>
        <p className='text-gray-700 leading-relaxed'>
          本隐私政策旨在帮助您了解我们如何收集、使用、存储和共享您的个人信息，以及您所享有的相关权利。在使用 EasyHabit
          应用前，请您务必仔细阅读并理解本隐私政策的全部内容。
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>1. 我们收集的信息</h2>
        <ul className='list-disc list-inside text-gray-700 leading-relaxed space-y-2'>
          <li>
            <strong>您提供的信息：</strong>当您使用 EasyHabit
            应用时，您可能会创建习惯记录、设置提醒等，这些信息将存储在您的设备上。
          </li>
          <li>
            <strong>设备信息：</strong>我们可能会收集您使用的设备型号、操作系统版本等基本信息，以改善应用性能。
          </li>
          <li>
            <strong>应用使用数据：</strong>
            我们可能会收集您如何使用应用的信息，例如功能使用频率、应用崩溃记录等，以优化用户体验。
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>2. 信息的利用</h2>
        <p className='text-gray-700 leading-relaxed mb-2'>我们将收集到的信息用于：</p>
        <ul className='list-disc list-inside text-gray-700 leading-relaxed space-y-2'>
          <li>提供、维护和改进 EasyHabit 应用的功能和服务</li>
          <li>开发新的功能和服务</li>
          <li>了解用户如何使用我们的应用，以改善用户体验</li>
          <li>向您发送有关应用更新或新功能的通知</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>3. 信息的存储</h2>
        <p className='text-gray-700 leading-relaxed mb-2'>我们采取以下措施保护您的信息安全：</p>
        <ul className='list-disc list-inside text-gray-700 leading-relaxed space-y-2'>
          <li>您的习惯数据主要存储在您的设备上</li>
          <li>如果您启用了云同步功能（高级版），您的数据将被加密并存储在云服务中</li>
          <li>我们会采取合理的技术措施，保护您的数据免遭未经授权的访问</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>4. 信息共享</h2>
        <p className='text-gray-700 leading-relaxed mb-2'>
          除非出现以下情况，否则我们不会与任何第三方共享您的个人信息：
        </p>
        <ul className='list-disc list-inside text-gray-700 leading-relaxed space-y-2'>
          <li>法律法规要求披露</li>
          <li>为保护 EasyHabit 的合法利益</li>
          <li>获得您的明确同意</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>5. 您的权利</h2>
        <p className='text-gray-700 leading-relaxed mb-2'>您对您的个人信息享有以下权利：</p>
        <ul className='list-disc list-inside text-gray-700 leading-relaxed space-y-2'>
          <li>访问您的个人信息</li>
          <li>删除应用内的所有数据</li>
          <li>导出您的数据</li>
          <li>随时停止使用我们的服务</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>6. 儿童隐私</h2>
        <p className='text-gray-700 leading-relaxed'>
          EasyHabit
          应用不适用于16周岁以下的儿童。如果您是父母或监护人，发现您的孩子在未经您同意的情况下向我们提供了个人信息，请通过应用内的&quot;用户反馈&quot;功能与我们联系。
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>7. 隐私政策更新</h2>
        <p className='text-gray-700 leading-relaxed'>
          我们可能会不时更新本隐私政策。当我们做出重大更改时，我们会在应用内通知您。您继续使用本应用将被视为接受修改后的隐私政策。
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>8. 联系我们</h2>
        <p className='text-gray-700 leading-relaxed'>
          如果您对本隐私政策有任何疑问，请通过应用内的&quot;用户反馈&quot;功能与我们联系。
        </p>
      </section>

      <footer className='text-center text-gray-500 text-sm mt-12'>
        <p>本政策更新日期：2025年5月27日</p>
      </footer>
    </div>
  );
}
