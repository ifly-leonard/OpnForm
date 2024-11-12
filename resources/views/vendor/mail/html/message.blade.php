@component('mail::layout')
{{-- Header --}}
@slot('header')
@if (!(isset($noBranding) && $noBranding))
    @component('mail::header', ['url' => config('app.url')])
    <img src="https://icrewsystems.com/frontend/public/images/logos/icrewsystems_logo_highres.png" alt="Cerebro - icrewsystems" srcset="" style="width: 150px; height: auto;">
    <br>
    <small>{{ config('app.name') }}</small>
    @endcomponent
@else
    <div style="margin-top:25px;" />
@endif
@endslot

{{-- Body --}}
{{ $slot }}

{{-- Subcopy --}}
@isset($subcopy)
@slot('subcopy')
@component('mail::subcopy')
{{ $subcopy }}
@endcomponent
@endslot
@endisset

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
@if (!(isset($noBranding) && $noBranding))
  {{ config('app.name') }} © {{ date('Y') }}. @lang('All rights reserved.')
@endif
@endcomponent
@endslot
@endcomponent
